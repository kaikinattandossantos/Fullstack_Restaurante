package com.example.demo.repository;

import com.example.demo.models.Modelo_Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PedidoRepository extends JpaRepository<Modelo_Pedido, Long> {
}
