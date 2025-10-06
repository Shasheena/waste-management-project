package com.manageItem.item.service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.manageItem.item.dto.SellerInfoDto;
import reactor.core.publisher.Mono;

@Service
public class SellerClientService {

    private final WebClient webClient;

    public SellerClientService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("http://localhost:8080/api/sellers").build();
    }

    public Mono<SellerInfoDto> getSellerByEmail(String email) {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder.path("/by-email")
                        .queryParam("email", email)
                        .build())
                .retrieve()
                .bodyToMono(SellerInfoDto.class);
    }
}

