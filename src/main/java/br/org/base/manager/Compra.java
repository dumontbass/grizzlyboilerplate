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
 * DateTime: 9/27/13
 * Time: 12:58 AM
 * To change this template use File | Settings | File Templates.
 */


public class Compra implements Serializable{

    @Id
    @ObjectId
    private String id;


    private List<ItemCompra> items = new ArrayList<ItemCompra>();


    private DateTime dataCompra;
    private String notaFiscal;
    private String fornecedor;
    private float valorTotal;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFornecedor() {
        return fornecedor;
    }

    public void setFornecedor(String fornecedor) {
        this.fornecedor = fornecedor;
    }

    public String getNotaFiscal() {
        return notaFiscal;
    }

    public void setNotaFiscal(String notaFiscal) {
        this.notaFiscal = notaFiscal;
    }

    public DateTime getDataCompra() {
        return dataCompra;
    }

    public void setDataCompra(DateTime dataCompra) {
        this.dataCompra = dataCompra;
    }

    public List<ItemCompra> getItems() {
        return items;
    }

    public void setItems(List<ItemCompra> items) {
        this.items = items;
    }


    public float getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(float valorTotal) {
        this.valorTotal = valorTotal;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Compra compra = (Compra) o;

        if (Float.compare(compra.valorTotal, valorTotal) != 0) return false;
        if (dataCompra != null ? !dataCompra.equals(compra.dataCompra) : compra.dataCompra != null) return false;
        if (fornecedor != null ? !fornecedor.equals(compra.fornecedor) : compra.fornecedor != null) return false;
        if (id != null ? !id.equals(compra.id) : compra.id != null) return false;
        if (items != null ? !items.equals(compra.items) : compra.items != null) return false;
        if (notaFiscal != null ? !notaFiscal.equals(compra.notaFiscal) : compra.notaFiscal != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (items != null ? items.hashCode() : 0);
        result = 31 * result + (dataCompra != null ? dataCompra.hashCode() : 0);
        result = 31 * result + (notaFiscal != null ? notaFiscal.hashCode() : 0);
        result = 31 * result + (fornecedor != null ? fornecedor.hashCode() : 0);
        result = 31 * result + (valorTotal != +0.0f ? Float.floatToIntBits(valorTotal) : 0);
        return result;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("Compra{");
        sb.append("id='").append(id).append('\'');
        sb.append(", items=").append(items);
        sb.append(", dataCompra=").append(dataCompra);
        sb.append(", notaFiscal='").append(notaFiscal).append('\'');
        sb.append(", fornecedor='").append(fornecedor).append('\'');
        sb.append(", valorTotal=").append(valorTotal);
        sb.append('}');
        return sb.toString();
    }
}
