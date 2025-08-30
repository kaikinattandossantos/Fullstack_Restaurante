package com.example.demo.service;

import com.example.demo.dto.ItemPedidoDTO;
import com.example.demo.dto.PedidoRequestDTO;
import com.example.demo.models.Modelo_ItemPedido;
import com.example.demo.models.Modelo_Pedido;
import com.example.demo.models.Modelo_Produto;
import com.example.demo.repository.PedidoRepository;
import com.example.demo.repository.ProdutoRepository;
import com.example.demo.service.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class Modelo_PedidoService {

    private final PedidoRepository pedidoRepository;
    private final ProdutoRepository produtoRepository;

    @Autowired
    public Modelo_PedidoService(PedidoRepository pedidoRepository, ProdutoRepository produtoRepository) {
        this.pedidoRepository = pedidoRepository;
        this.produtoRepository = produtoRepository;
    }

    @Transactional
    public Modelo_Pedido criarPedido(PedidoRequestDTO pedidoDTO) {
        Modelo_Pedido novoPedido = new Modelo_Pedido();
        novoPedido.setNomeCliente(pedidoDTO.nomeCliente());
        
        List<Modelo_ItemPedido> itensDoPedido = new ArrayList<>();
        double precoTotal = 0.0;
        double custoTotal = 0.0;

        for(ItemPedidoDTO itemDTO : pedidoDTO.itens()) {
            Modelo_Produto produto = produtoRepository.findById(itemDTO.produtoId())
                .orElseThrow(() -> new ResourceNotFoundException("Produto não encontrado com ID: " + itemDTO.produtoId()));
            
            Modelo_ItemPedido itemPedido = new Modelo_ItemPedido();
            itemPedido.setProduto(produto);
            itemPedido.setQuantidade(itemDTO.quantidade());
            itemPedido.setPrecoUnitario(produto.getPreco());
            itemPedido.setCustoUnitario(produto.getCusto());
            itemPedido.setPedido(novoPedido);
            
            itensDoPedido.add(itemPedido);
            
            // Realiza os cálculos
            precoTotal += produto.getPreco() * itemDTO.quantidade();
            custoTotal += produto.getCusto() * itemDTO.quantidade();
        }

        novoPedido.setItens(itensDoPedido);
        novoPedido.setPrecoTotal(precoTotal);
        novoPedido.setCustoTotal(custoTotal);
        
        return pedidoRepository.save(novoPedido);
    }
    
    @Transactional(readOnly = true)
    public List<Modelo_Pedido> listarTodos() {
        return pedidoRepository.findAll();
    }
}
