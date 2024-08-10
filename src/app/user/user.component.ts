import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Output() calculator = new EventEmitter<InvestmentInput>();
  calculator = output<InvestmentInput>()
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredDuration = signal('10');
  enteredExpectedReturn = signal('5');
  
  onSubmit() {
    this.calculator.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });
    this.enteredInitialInvestment = signal('0');
    this.enteredAnnualInvestment = signal('0');
    this.enteredDuration = signal('10');
    this.enteredExpectedReturn = signal('5');
  }
}
