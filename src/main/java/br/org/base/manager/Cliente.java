package br.org.base.manager;

import java.io.Serializable;


public class Cliente extends Pessoa implements Serializable {


    private boolean mailing;
    private boolean vip;
    private boolean blacklisted;
    private Comanda comanda;
    private boolean ativo;


    public boolean isMailing() {
        return mailing;
    }

    public void setMailing(boolean mailing) {
        this.mailing = mailing;
    }

    public boolean isVip() {
        return vip;
    }

    public void setVip(boolean vip) {
        this.vip = vip;
    }

    public boolean isBlacklisted() {
        return blacklisted;
    }

    public void setBlacklisted(boolean blacklisted) {
        this.blacklisted = blacklisted;
    }

    public Comanda getComanda() {
        return comanda;
    }

    public void setComanda(Comanda comanda) {
        this.comanda = comanda;
    }

    public boolean isAtivo() {
        return ativo;
    }

    public void setAtivo(boolean ativo) {
        this.ativo = ativo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Cliente cliente = (Cliente) o;

        if (ativo != cliente.ativo) return false;
        if (blacklisted != cliente.blacklisted) return false;
        if (mailing != cliente.mailing) return false;
        if (vip != cliente.vip) return false;
        if (comanda != null ? !comanda.equals(cliente.comanda) : cliente.comanda != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = (mailing ? 1 : 0);
        result = 31 * result + (vip ? 1 : 0);
        result = 31 * result + (blacklisted ? 1 : 0);
        result = 31 * result + (comanda != null ? comanda.hashCode() : 0);
        result = 31 * result + (ativo ? 1 : 0);
        return result;
    }

    @Override
    public String toString() {

        super.toString();

        final StringBuffer sb = new StringBuffer("Cliente{");
        sb.append("mailing=").append(mailing);
        sb.append(", vip=").append(vip);
        sb.append(", blacklisted=").append(blacklisted);
        sb.append(", comanda=").append(comanda);
        sb.append(", ativo=").append(ativo);
        sb.append('}');
        return sb.toString();
    }
}