package M2ISNet.SNetBackend.ResponseObjects;

public class ResponseTransfer {
    private String text;

    public ResponseTransfer(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
