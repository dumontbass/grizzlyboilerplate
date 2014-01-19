package br.org.base.manager;

/**
 * Created with IntelliJ IDEA.
 * User: guilherme
 * Date: 12/24/13
 * Time: 2:31 AM
 * To change this template use File | Settings | File Templates.
 */
public class ProdutoCombo extends Produto {


    private float quantidade;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;

        ProdutoCombo that = (ProdutoCombo) o;

        if (Float.compare(that.quantidade, quantidade) != 0) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + (quantidade != +0.0f ? Float.floatToIntBits(quantidade) : 0);
        return result;
    }

    public float getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(float quantidade) {
        this.quantidade = quantidade;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("ProdutoCombo{");
        sb.append("quantidade=").append(quantidade);
        sb.append('}');
        return sb.toString();
    }
}
