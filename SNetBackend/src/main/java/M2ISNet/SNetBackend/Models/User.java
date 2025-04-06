package M2ISNet.SNetBackend.Models;


import jakarta.persistence.*;

import java.util.Date;
import java.util.Set;

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

    @ManyToMany(mappedBy = "groupMembers")
    private Set<Group> userGroups;

    @ManyToMany(mappedBy = "groupAdmins")
    private Set<Group> adminGroups;

    @OneToMany
    @JoinColumn(name = "userId")
    private Set<Post> userPosts;

    @JoinTable(name = "user_friends", joinColumns = {
            @JoinColumn(name = "befriended_By", referencedColumnName = "userId", nullable =   false)}, inverseJoinColumns = {
            @JoinColumn(name = "friends", referencedColumnName = "userId", nullable = false)})
    @ManyToMany
    private Set<User> userFriends;

    @ManyToMany(mappedBy = "userFriends")
    private Set<User> addUser;

    @OneToMany(mappedBy = "sender")
    private Set<UserChat> sentMessages;

    @OneToMany(mappedBy = "reciever")
    private Set<UserChat> recievedMessages;

}
