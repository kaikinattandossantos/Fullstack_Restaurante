package com.example.demo.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public record ItemPedidoDTO(
    @NotNull
    Long produtoId,
    
    @NotNull @Positive
    Integer quantidade
) {}
