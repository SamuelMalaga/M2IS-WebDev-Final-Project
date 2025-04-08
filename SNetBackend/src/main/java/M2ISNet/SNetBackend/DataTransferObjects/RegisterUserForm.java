package M2ISNet.SNetBackend.DataTransferObjects;

import java.util.Date;

public class RegisterUserForm {
    private String user_name;
    private String user_password;
    private String user_email;
    private Date user_birth_date;

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_password() {
        return user_password;
    }

    public void setUser_password(String user_password) {
        this.user_password = user_password;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public Date getUser_birth_date() {
        return user_birth_date;
    }

    public void setUser_birth_date(Date user_birth_date) {
        this.user_birth_date = user_birth_date;
    }
}
