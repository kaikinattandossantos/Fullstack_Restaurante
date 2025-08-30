package com.example.demo.models;

import java.time.LocalDateTime;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero; // Importe esta anotação
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Modelo_Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O nome do produto é obrigatório.")
    @Column(nullable = false)
    private String nome;

    @Column(length = 1000)
    private String descricao;

    @Positive(message = "O preço deve ser maior que zero.")
    @Column(nullable = false)
    private Double preco;
    
    // --- CAMPO NOVO ADICIONADO ---
    @PositiveOrZero(message = "O custo deve ser um número positivo ou zero.")
    @Column(nullable = false, columnDefinition = "double default 0.0") // Adicionado valor padrão
    private Double custo;

    @PositiveOrZero(message = "A quantidade em estoque deve ser um número positivo.")
    @Column(name = "stock_quantity")
    private Integer quantidadeEstoque;

    @Column(name = "creation_date", updatable = false)
    private LocalDateTime dataCriacao;
}

