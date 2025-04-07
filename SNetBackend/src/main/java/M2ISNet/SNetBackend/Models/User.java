package M2ISNet.SNetBackend.Models;


import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false)
    private String userName;

    @Column(nullable = false)
    private String userEmail;

    @Column(nullable = false)
    private Date userBirthDate;

    @Column(nullable = false)
    private String userPassword;

    @CreationTimestamp
    private Date userCreationDate;

    @ManyToMany(mappedBy = "groupMembers")
    private Set<Group> userGroups = new HashSet<>();

    @ManyToMany(mappedBy = "groupAdmins")
    private Set<Group> adminGroups = new HashSet<>();

    @OneToMany
    @JoinColumn(name = "userId")
    private List<Post> userPosts = new ArrayList<>();

    @JoinTable(name = "user_friends", joinColumns = {
            @JoinColumn(name = "befriended_By", referencedColumnName = "userId", nullable =   false)}, inverseJoinColumns = {
            @JoinColumn(name = "friends", referencedColumnName = "userId", nullable = false)})
    @ManyToMany
    private Set<User> userFriends = new HashSet<>();;

//    @ManyToMany(mappedBy = "userFriends")
//    private Set<User> addUser;

    @OneToMany(mappedBy = "sender")
    private Set<UserChat> sentMessages = new HashSet<>();;

    @OneToMany(mappedBy = "reciever")
    private Set<UserChat> recievedMessages = new HashSet<>();;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public Date getUserBirthDate() {
        return userBirthDate;
    }

    public void setUserBirthDate(Date userBirthDate) {
        this.userBirthDate = userBirthDate;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public List<Post> getUserPosts() {
        return userPosts;
    }

    public Set<User> getUserFriends() {
        return userFriends;
    }

    public Set<UserChat> getSentMessages() {
        return sentMessages;
    }

    public Set<UserChat> getRecievedMessages() {
        return recievedMessages;
    }

    public Set<Group> getUserGroups() {
        return userGroups;
    }
}
