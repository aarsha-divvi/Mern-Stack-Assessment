"use strict";
class College {
    static display() {
        console.log("College Name:", College.collegeName);
    }
}
College.collegeName = "ABC College";
College.display();
