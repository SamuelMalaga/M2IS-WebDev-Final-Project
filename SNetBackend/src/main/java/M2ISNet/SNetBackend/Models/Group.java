package M2ISNet.SNetBackend.Models;


import jakarta.persistence.*;

@Entity
@Table(name = "posts")
public class Group {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long groupId;

    @Column(nullable = false)
    private String groupName;


}
