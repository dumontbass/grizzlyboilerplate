package br.org.base.manager;

import org.joda.time.DateTime;

import java.util.List;

public class Pedido {
	
	
	private String situacao;
    private Funcionario funcionario;
    private DateTime data;
    private float valor;


    private List<ProdutoVenda> produto;


    public String getSituacao() {
        return situacao;
    }

    public void setSituacao(String situacao) {
        this.situacao = situacao;
    }

    public Funcionario getFuncionario() {
        return funcionario;
    }

    public void setFuncionario(Funcionario funcionario) {
        this.funcionario = funcionario;
    }

    public DateTime getData() {
        return data;
    }

    public void setData(DateTime data) {
        this.data = data;
    }

    public float getValor() {
        return valor;
    }

    public void setValor(float valor) {
        this.valor = valor;
    }

    public List<ProdutoVenda> getProduto() {
        return produto;
    }

    public void setProduto(List<ProdutoVenda> produto) {
        this.produto = produto;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Pedido pedido = (Pedido) o;

        if (Float.compare(pedido.valor, valor) != 0) return false;
        if (data != null ? !data.equals(pedido.data) : pedido.data != null) return false;
        if (funcionario != null ? !funcionario.equals(pedido.funcionario) : pedido.funcionario != null) return false;
        if (produto != null ? !produto.equals(pedido.produto) : pedido.produto != null) return false;
        if (situacao != null ? !situacao.equals(pedido.situacao) : pedido.situacao != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = situacao != null ? situacao.hashCode() : 0;
        result = 31 * result + (funcionario != null ? funcionario.hashCode() : 0);
        result = 31 * result + (data != null ? data.hashCode() : 0);
        result = 31 * result + (valor != +0.0f ? Float.floatToIntBits(valor) : 0);
        result = 31 * result + (produto != null ? produto.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("Pedido{");
        sb.append("situacao='").append(situacao).append('\'');
        sb.append(", funcionario=").append(funcionario);
        sb.append(", data=").append(data);
        sb.append(", valor=").append(valor);
        sb.append(", produto=").append(produto);
        sb.append('}');
        return sb.toString();
    }
}
