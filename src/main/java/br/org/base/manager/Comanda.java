package br.org.base.manager;

import net.vz.mongodb.jackson.ObjectId;
import org.joda.time.DateTime;

import javax.persistence.Id;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;



public class Comanda implements Serializable {
	
	@Id
    @ObjectId
    private String id;
    private String tipo;
    private long numero;
    private boolean aberta;
    private DateTime dataAbertura;
    private DateTime dataFechamento;

    private boolean bloqueada;
    private boolean perdida;
    private boolean pago;
    private float valorPago;

    private Cliente cliente;



    private List<Pedido> pedidos = new ArrayList<Pedido>();


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public long getNumero() {
        return numero;
    }

    public void setNumero(long numero) {
        this.numero = numero;
    }

    public boolean isAberta() {
        return aberta;
    }

    public void setAberta(boolean aberta) {
        this.aberta = aberta;
    }

    public DateTime getDataAbertura() {
        return dataAbertura;
    }

    public void setDataAbertura(DateTime dataAbertura) {
        this.dataAbertura = dataAbertura;
    }

    public DateTime getDataFechamento() {
        return dataFechamento;
    }

    public void setDataFechamento(DateTime dataFechamento) {
        this.dataFechamento = dataFechamento;
    }

    public boolean isBloqueada() {
        return bloqueada;
    }

    public void setBloqueada(boolean bloqueada) {
        this.bloqueada = bloqueada;
    }

    public boolean isPerdida() {
        return perdida;
    }

    public void setPerdida(boolean perdida) {
        this.perdida = perdida;
    }

    public boolean isPago() {
        return pago;
    }

    public void setPago(boolean pago) {
        this.pago = pago;
    }

    public float getValorPago() {
        return valorPago;
    }

    public void setValorPago(float valorPago) {
        this.valorPago = valorPago;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public List<Pedido> getPedidos() {
        return pedidos;
    }

    public void setPedidos(List<Pedido> pedidos) {
        this.pedidos = pedidos;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Comanda comanda = (Comanda) o;

        if (aberta != comanda.aberta) return false;
        if (bloqueada != comanda.bloqueada) return false;
        if (numero != comanda.numero) return false;
        if (pago != comanda.pago) return false;
        if (perdida != comanda.perdida) return false;
        if (Float.compare(comanda.valorPago, valorPago) != 0) return false;
        if (cliente != null ? !cliente.equals(comanda.cliente) : comanda.cliente != null) return false;
        if (dataAbertura != null ? !dataAbertura.equals(comanda.dataAbertura) : comanda.dataAbertura != null)
            return false;
        if (dataFechamento != null ? !dataFechamento.equals(comanda.dataFechamento) : comanda.dataFechamento != null)
            return false;
        if (id != null ? !id.equals(comanda.id) : comanda.id != null) return false;
        if (pedidos != null ? !pedidos.equals(comanda.pedidos) : comanda.pedidos != null) return false;
        if (tipo != null ? !tipo.equals(comanda.tipo) : comanda.tipo != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (tipo != null ? tipo.hashCode() : 0);
        result = 31 * result + (int) (numero ^ (numero >>> 32));
        result = 31 * result + (aberta ? 1 : 0);
        result = 31 * result + (dataAbertura != null ? dataAbertura.hashCode() : 0);
        result = 31 * result + (dataFechamento != null ? dataFechamento.hashCode() : 0);
        result = 31 * result + (bloqueada ? 1 : 0);
        result = 31 * result + (perdida ? 1 : 0);
        result = 31 * result + (pago ? 1 : 0);
        result = 31 * result + (valorPago != +0.0f ? Float.floatToIntBits(valorPago) : 0);
        result = 31 * result + (cliente != null ? cliente.hashCode() : 0);
        result = 31 * result + (pedidos != null ? pedidos.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("Comanda{");
        sb.append("id='").append(id).append('\'');
        sb.append(", tipo='").append(tipo).append('\'');
        sb.append(", numero=").append(numero);
        sb.append(", aberta=").append(aberta);
        sb.append(", dataAbertura=").append(dataAbertura);
        sb.append(", dataFechamento=").append(dataFechamento);
        sb.append(", bloqueada=").append(bloqueada);
        sb.append(", perdida=").append(perdida);
        sb.append(", pago=").append(pago);
        sb.append(", valorPago=").append(valorPago);
        sb.append(", cliente=").append(cliente);
        sb.append(", pedidos=").append(pedidos);
        sb.append('}');
        return sb.toString();
    }
}
