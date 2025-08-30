package com.example.demo.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.Valid;
import java.util.List;

public record PedidoRequestDTO(
    @NotBlank
    String nomeCliente,
    
    @NotEmpty
    @Valid // Valida os itens dentro da lista
    List<ItemPedidoDTO> itens
) {}
