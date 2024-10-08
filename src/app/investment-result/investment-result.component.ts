import { CurrencyPipe } from '@angular/common';
import { Component, inject} from '@angular/core';
import { InvestmentSerivce } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  private investmentService = inject(InvestmentSerivce);
  get results() {
    return this.investmentService.resultsData;
  }
}
