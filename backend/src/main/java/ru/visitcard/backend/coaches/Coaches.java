package ru.visitcard.backend.coaches;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "coaches")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Coaches {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @Column(nullable = false, length = 50)
    private String firstName;

    @Column(nullable = false, length = 50)
    private String lastName;

    @Column(nullable = false, length = 100)
    private String description;

    @Column(nullable = false, length = 2)
    private Integer experience;

    @Column(length = 100)
    private String additionalInfo;


}
