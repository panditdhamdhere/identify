// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract identiFi {
    // struct
    struct User {
        string firstName;
        string lastName;
        string userName;
        string email;
        string homeAddress;
        string dateOfBirth;
        string education;
        string workHistory;
        string phoneNumber;
        string jobTitle;
        string x;
        string tiktok;
        string instagram;
        string youtube;
        string linkedin;
        string info;
        string[] skills;
        string imageUrl;
        bool exist;
        uint256 appliedJobs;
        Visibility visibility;
    }

    struct Visibility {
        bool education;
        bool workHistory;
        bool phoneNumber;
        bool homeAddress;
        bool dateOfBirth;
    }
    struct basicInfo {
        string firstName;
        string lastName;
        string userName;
        string email;
        string homeAddress;
        string phoneNumber;
    }

    struct socialLinks {
        string x;
        string tiktok;
        string instagram;
        string youtube;
        string linkedin;
    }

    struct professionalInfo {
        string workHistory;
        string education;
        string jobTitle;
        string info;
        string[] skills;
        string imageUrl;
    }

    // state variables
    mapping(string => User) private users;
    mapping(address => string) private addressToUserName;
    mapping(string => bool) private userName;

    // modifiers
    modifier onlyUniqueUsername(string memory username) {
        require(!userName[username], "Username already exists");
        _;
    }
}
