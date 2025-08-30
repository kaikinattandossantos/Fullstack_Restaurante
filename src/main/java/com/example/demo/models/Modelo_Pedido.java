package com.example.demo.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "orders")
public class Modelo_Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "customer_name", nullable = false)
    private String nomeCliente;

    @Column(name = "order_date", nullable = false)
    private LocalDateTime dataPedido;

    @OneToMany(mappedBy = "pedido", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Modelo_ItemPedido> itens = new ArrayList<>();

    @Column(name = "total_price")
    private Double precoTotal; // Preço de venda total

    @Column(name = "total_cost")
    private Double custoTotal; // Custo total do pedido

    @Enumerated(EnumType.STRING)
    private StatusPedido status;

    public enum StatusPedido {
        RECEBIDO,
        EM_PREPARACAO,
        CONCLUIDO,
        CANCELADO
    }

    @PrePersist
    protected void onCreate() {
        dataPedido = LocalDateTime.now();
        status = StatusPedido.RECEBIDO;
    }
}
