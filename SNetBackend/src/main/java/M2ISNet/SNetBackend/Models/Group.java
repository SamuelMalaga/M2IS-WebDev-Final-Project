package M2ISNet.SNetBackend.Models;


import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "posts")
public class Group {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long groupId;

    @Column(nullable = false)
    private String groupName;

    @ManyToMany
    @JoinTable(
            name = "group_members",
            joinColumns = @JoinColumn(name = "groupId"),
            inverseJoinColumns = @JoinColumn(name = "userId")
    )
    private Set<User> groupMembers;

    @ManyToMany
    @JoinTable(
            name = "group_admins",
            joinColumns = @JoinColumn(name = "groupId"),
            inverseJoinColumns = @JoinColumn(name = "userId")
    )
    private Set<User> groupAdmins;

    @OneToMany
    @JoinColumn(name = "groupId")
    private Set<Post> groupPosts;

}
