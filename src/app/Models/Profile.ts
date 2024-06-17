import { Agent } from "./Agent";
import { Client } from "./Client";
import { Role } from "./Role";

export interface Profile{
    username:string;
    password:string;
    isEnabled:Boolean;
    personne:Client|Agent;
    role:Role;
}