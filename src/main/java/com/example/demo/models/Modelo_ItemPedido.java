package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "order_items")
public class Modelo_ItemPedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    private Modelo_Produto produto;

    @Column(nullable = false)
    private Integer quantidade;
    
    @Column(name = "unit_price")
    private Double precoUnitario; // Preço do produto no momento da compra
    
    @Column(name = "unit_cost")
    private Double custoUnitario; // Custo do produto no momento da compra

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", nullable = false)
    @JsonIgnore
    private Modelo_Pedido pedido;
}
