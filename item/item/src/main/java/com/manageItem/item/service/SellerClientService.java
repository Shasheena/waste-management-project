package com.manageItem.item.service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.manageItem.item.dto.SellerInfoDto;

import reactor.core.publisher.Mono;

@Service
public class SellerClientService {

    private final WebClient webClient;

    public SellerClientService(WebClient webClient) {
        this.webClient = webClient;
    }

    public Mono<SellerInfoDto> getSellerByEmail(String email) {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/api/sellers/by-email")
                        .queryParam("email", email)
                        .build())
                .retrieve()
                .bodyToMono(SellerInfoDto.class);
    }
}
