import { DadosService } from './../../services/dados.service';
import { Component, OnInit, OnDestroy, ElementRef, QueryList, ViewChildren, PLATFORM_ID, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NbListItemComponent, NbLayoutScrollService, NB_WINDOW } from '@nebular/theme';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit, OnDestroy {
  @ViewChildren(NbListItemComponent, { read: ElementRef }) listItems: QueryList<ElementRef<Element>>;

  private querySubscription: Subscription;
  private apiSubscription: Subscription;
  pagina = 1;
  quantidade = 20;
  private termo = '';
  public dados: [];
  placeholders = [];
  initialScrollRestoration: ScrollRestoration;

  constructor(private activedRoute: ActivatedRoute,
     private dadosService: DadosService,
     private scrollService: NbLayoutScrollService,
     @Inject(PLATFORM_ID) private platformId,
     @Inject(NB_WINDOW) private window,
     ) {
    this.escutarMudançaDeRota();

    if (isPlatformBrowser(this.platformId) && this.window.history.scrollRestoration) {
      // Prevent browsers from scrolling down to last scroll position, when navigating back to this page.
      // It doesn't make sense here, since list is dynamic and we handle last user position ourselves,
      // by storing page number in URL. So for this component, we disable scroll restoration.
      // Don't forget to re-enable it in 'OnDestroy', since this configuration preserved for the whole session
      // and it will not be reset after page reload.
      this.initialScrollRestoration = window.history.scrollRestoration;
      history.scrollRestoration = 'manual';
    }
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
    this.apiSubscription.unsubscribe();
    console.log('Desinscreveu da tela resultado!');

    if (this.initialScrollRestoration) {
      this.window.history.scrollRestoration = this.initialScrollRestoration;
    }

  }

  carregarProximo(){
    this.pagina++;

    this.placeholders = new Array(this.quantidade);
    this.consultarApi();
  }

  private escutarMudançaDeRota() {
    this.querySubscription = this.activedRoute.queryParams.subscribe(data => {
      this.termo = data['busca'];
      this.consultarApi();
    });
  }



  private consultarApi() {
    this.apiSubscription = this.dadosService.load(this.termo, this.pagina, this.quantidade)
    .subscribe((dadosApi: any) => this.dados = dadosApi.resultados);
  }
}
