package br.org.base.manager;

import net.vz.mongodb.jackson.Id;
import net.vz.mongodb.jackson.ObjectId;
import org.joda.time.DateTime;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: guilherme
 * DateTime: 11/13/13
 * Time: 2:05 PM
 * To change this template use File | Settings | File Templates.
 */
public class Venda implements Serializable {

    @Id
    @ObjectId
    private String id;

    private float valorTotal;

    private String meioPagamento;

    private Cliente cliente;

    private DateTime dataVenda = new DateTime();

    private List<ProdutoVenda> produtos = new ArrayList<>();


    public float getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(float valorTotal) {
        this.valorTotal = valorTotal;
    }

    public String getMeioPagamento() {
        return meioPagamento;
    }

    public void setMeioPagamento(String meioPagamento) {
        this.meioPagamento = meioPagamento;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public DateTime getDataVenda() {
        return dataVenda;
    }

    public void setDataVenda(DateTime dataVenda) {
        this.dataVenda = dataVenda;
    }

    public List<ProdutoVenda> getProdutos() {
        return produtos;
    }

    public void setProdutos(List<ProdutoVenda> produtos) {
        this.produtos = produtos;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Venda venda = (Venda) o;

        if (Float.compare(venda.valorTotal, valorTotal) != 0) return false;
        if (cliente != null ? !cliente.equals(venda.cliente) : venda.cliente != null) return false;

        if (meioPagamento != null ? !meioPagamento.equals(venda.meioPagamento) : venda.meioPagamento != null)
            return false;
        if (produtos != null ? !produtos.equals(venda.produtos) : venda.produtos != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = (valorTotal != +0.0f ? Float.floatToIntBits(valorTotal) : 0);
        result = 31 * result + (meioPagamento != null ? meioPagamento.hashCode() : 0);
        result = 31 * result + (cliente != null ? cliente.hashCode() : 0);
        result = 31 * result + (dataVenda != null ? dataVenda.hashCode() : 0);
        result = 31 * result + (produtos != null ? produtos.hashCode() : 0);
        return result;
    }


    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("Venda{");
        sb.append("valorTotal=").append(valorTotal);
        sb.append(", meioPagamento='").append(meioPagamento).append('\'');
        sb.append(", cliente=").append(cliente);
        sb.append(", dataVenda=").append(dataVenda);
        sb.append(", produtos=").append(produtos);
        sb.append('}');
        return sb.toString();
    }
}
