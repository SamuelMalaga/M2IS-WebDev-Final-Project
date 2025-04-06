package M2ISNet.SNetBackend.Models.Embeddables;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class UserChatKey implements Serializable {

    @Column(name="sender")
    private Long sender;

    @Column(name = "reciever")
    private Long reciever;

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        UserChatKey that = (UserChatKey) o;
        return Objects.equals(sender, that.sender) && Objects.equals(reciever, that.reciever);
    }

    @Override
    public int hashCode() {
        return Objects.hash(sender, reciever);
    }
}
