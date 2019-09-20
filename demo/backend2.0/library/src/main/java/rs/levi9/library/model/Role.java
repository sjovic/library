package rs.levi9.library.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "role")
public class Role extends BaseEntity implements Serializable {

    private static final long serialVersionUID = 5926468583005150707L;


    public enum RoleType {
        ADMIN_ROLE("ADMIN_ROLE"),
        USER_ROLE("USER_ROLE"),
        UNAUTHORISED("UNAUTHORISED");

        private String roleType;

        RoleType(String roleType) {
            this.roleType = roleType;
        }

        public String toValue() {
            return roleType;
        }


        public static RoleType fromValue(String value) {
            if (value != null) {
                for (RoleType role : values()) {
                    if (role.roleType.equals(value)) {
                        return role;
                    }
                }
            }

            return getDefault();
        }

        public static RoleType getDefault() {
            return UNAUTHORISED;
        }
    }

    @Column
    private String role; //String because JWT needs JSON format

    public Role() {
    }

    public Role(String role) {
        this.role = role;
    }

    public String getRole() {
        return role;
    }

    public void setRole(RoleType role) {
        this.role = role.toValue();
    }

}
