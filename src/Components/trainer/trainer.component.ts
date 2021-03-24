import { Component } from "@angular/core";
import { Trainer } from "./trainer";
@Component(
    {
        selector: "app-trainer",
        templateUrl: "./trainer.component.html",
        styleUrls: ["./trainer.component.css"]
    }
)
export class TrainerComponent {
    trainers: Trainer[] = [
        {
            id: 1,
            name: "Hector",
            salary: 50000

        },
        {
            id: 2,
            name: "Mpampis",
            salary: 30000

        },
        {
            id: 3,
            name: "Lakis",
            salary: 40000

        }
    ]
}