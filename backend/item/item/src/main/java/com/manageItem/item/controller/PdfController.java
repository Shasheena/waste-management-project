package com.manageItem.item.controller;

import java.io.ByteArrayOutputStream;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.itextpdf.layout.properties.UnitValue;
import com.manageItem.item.model.InterestedItem;
import com.manageItem.item.model.Item;
import com.manageItem.item.service.InterestedItemService;

@RestController
@RequestMapping("/api/pdf")
@CrossOrigin(origins = "http://localhost:3000")
public class PdfController {

    private final InterestedItemService interestedItemService;
    private final RestTemplate restTemplate;

    public PdfController(InterestedItemService interestedItemService) {
        this.interestedItemService = interestedItemService;
        this.restTemplate = new RestTemplate();
    }

    @GetMapping("/pickup")
    public ResponseEntity<byte[]> generatePickupPdf(@RequestParam int interestedItemId) {
        try {
            InterestedItem item = interestedItemService.getInterestedItemById(interestedItemId);
            Item product = item.getItemIdItem();

            // Call Seller microservice to fetch seller info
            String sellerUrl = "http://localhost:8080/api/sellers/by-email?email=" + product.getSellerEmail();
            SellerResponse sellerResponse = restTemplate.getForObject(sellerUrl, SellerResponse.class);

            // Call Address microservice to fetch address info
            String addressUrl = "http://localhost:8080/api/address/by-id?id=" + sellerResponse.getAddress_id();
            AddressResponse addressResponse = restTemplate.getForObject(addressUrl, AddressResponse.class);

            // PDF generation
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            PdfWriter writer = new PdfWriter(baos);
            PdfDocument pdf = new PdfDocument(writer);
            Document document = new Document(pdf);

            document.add(new Paragraph("Pickup Confirmation").setBold().setFontSize(18).setMarginBottom(10));
            document.add(new Paragraph("Generated On: " +
                    LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")))
                    .setFontSize(10).setMarginBottom(10));

            Table table = new Table(UnitValue.createPercentArray(new float[]{1, 2})).useAllAvailableWidth();

            // Buyer info
            table.addCell("Buyer Email");
            table.addCell(item.getBuyerEmail());

            // Item info
            table.addCell("Item Description");
            table.addCell(product.getDescription());

            table.addCell("Unit Price");
            table.addCell(String.valueOf(product.getUnitPrice()));

            table.addCell("Total Quantity");
            table.addCell(String.valueOf(item.getTotalQuantity()));

            table.addCell("Total Price");
            table.addCell(String.valueOf(item.getTotalPrice()));

            // Seller info
            table.addCell("Seller Email");
            table.addCell(sellerResponse.getSeller_email());

            table.addCell("Seller City");
            table.addCell(addressResponse.getCity());

            table.addCell("Seller District");
            table.addCell(addressResponse.getDistrict());

            table.addCell("Seller Province");
            table.addCell(addressResponse.getProvince());

            table.addCell("Other Address Info");
            table.addCell(addressResponse.getOther());

            document.add(table);
            document.close();

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_PDF);
            headers.setContentDispositionFormData("attachment", "pickup_" + interestedItemId + ".pdf");

            return ResponseEntity.ok().headers(headers).body(baos.toByteArray());

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(null);
        }
    }

    // Inner classes to map responses from Seller microservice
    static class SellerResponse {
        private String seller_email;
        private int address_id;

        // getters & setters
        public String getSeller_email() { return seller_email; }
        public void setSeller_email(String seller_email) { this.seller_email = seller_email; }
        public int getAddress_id() { return address_id; }
        public void setAddress_id(int address_id) { this.address_id = address_id; }
    }

    static class AddressResponse {
        private String city;
        private String district;
        private String province;
        private String other;

        // getters & setters
        public String getCity() { return city; }
        public void setCity(String city) { this.city = city; }
        public String getDistrict() { return district; }
        public void setDistrict(String district) { this.district = district; }
        public String getProvince() { return province; }
        public void setProvince(String province) { this.province = province; }
        public String getOther() { return other; }
        public void setOther(String other) { this.other = other; }
    }
}
