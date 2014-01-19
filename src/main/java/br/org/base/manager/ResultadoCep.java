package br.org.base.manager;

/**
 * Created with IntelliJ IDEA.
 * User: guilherme
 * Date: 11/26/13
 * Time: 4:06 PM
 * To change this template use File | Settings | File Templates.
 */
public class ResultadoCep {

    private String resultado;
    private String logradouro;
    private String uf;
    private String cidade;
    private String bairro;
    private String tipo_logradouro;


    public String getResultado() {
        return resultado;
    }

    public void setResultado(String resultado) {
        this.resultado = resultado;
    }

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getTipo_logradouro() {
        return tipo_logradouro;
    }

    public void setTipo_logradouro(String tipo_logradouro) {
        this.tipo_logradouro = tipo_logradouro;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }
}
