import { Component } from "@angular/core";
import { IStudent } from "./student";
import { students } from "./studentMockUp";

@Component(
    {
        selector: "app-student",
        templateUrl: "./student.component.html"
    }
)
export class StudentComponent {
    mathites: IStudent[] = students;
}