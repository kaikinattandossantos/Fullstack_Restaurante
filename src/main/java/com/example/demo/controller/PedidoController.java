package com.example.demo.controller;

import com.example.demo.dto.PedidoRequestDTO;
import com.example.demo.models.Modelo_Pedido;
import com.example.demo.service.Modelo_PedidoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller REST responsável pelos endpoints de gerenciamento de pedidos.
 */
@Tag(name = "Pedidos", description = "Endpoints para o gerenciamento de pedidos")
@RestController
@RequestMapping("/pedidos")
public class PedidoController {

    private final Modelo_PedidoService pedidoService;

    @Autowired
    public PedidoController(Modelo_PedidoService pedidoService) {
        this.pedidoService = pedidoService;
    }

    /**
     * Cria um novo pedido no sistema.
     * @param pedidoRequestDTO DTO contendo os dados do cliente e os itens do pedido.
     * @return um ResponseEntity com o pedido criado e o status HTTP 201 Created.
     */
    @Operation(summary = "Cria um novo pedido")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "Pedido criado com sucesso",
            content = { @Content(mediaType = "application/json", schema = @Schema(implementation = Modelo_Pedido.class)) }),
        @ApiResponse(responseCode = "400", description = "Dados de entrada inválidos", content = @Content),
        @ApiResponse(responseCode = "404", description = "Produto não encontrado para um dos itens", content = @Content)
    })
    @PostMapping
    public ResponseEntity<Modelo_Pedido> criarPedido(@Valid @RequestBody PedidoRequestDTO pedidoRequestDTO) {
        Modelo_Pedido novoPedido = pedidoService.criarPedido(pedidoRequestDTO);
        return new ResponseEntity<>(novoPedido, HttpStatus.CREATED);
    }

    /**
     * Lista todos os pedidos registrados no sistema.
     * @return Um ResponseEntity com a lista de todos os pedidos.
     */
    @Operation(summary = "Lista todos os pedidos")
    @GetMapping
    public ResponseEntity<List<Modelo_Pedido>> listarTodosPedidos() {
        List<Modelo_Pedido> pedidos = pedidoService.listarTodos();
        return ResponseEntity.ok(pedidos);
    }
}

