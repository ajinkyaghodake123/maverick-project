import {
  Component,
  Inject,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  OnInit
} from "@angular/core";
import { MatDialog } from '@angular/material';
import { Masonry } from "../masonry/masonry-token";
import { MasonryOptions } from "../masonry/masonry-options.model";
import { MasonryInstance } from "../masonry/masonry-instance.model";
import { cards } from "../cards";
import { CategoryUrlsService } from "../category-urls.service";
import { RecommendationService } from "../recommendation.service";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";
import { DialogboxComponent } from "../dialogbox/dialogbox.component";
@Component({
  selector: "game-card",
  templateUrl: "./game-card.component.html",
  styleUrls: ["./game-card.component.scss"]
})
export class GameCardComponent implements OnInit {
  @ViewChild("grid") public grid: ElementRef;



  public masonryInstance: MasonryInstance;



  cards;

  sub: Subscription;

  show=false;

  masonryImages;

  limit = 10;



  constructor(

    private route: ActivatedRoute,

    private router: Router,

    private recommendationService: RecommendationService,

    @Inject(Masonry) public masonry,

    private categoryService: CategoryUrlsService,

    public dialog: MatDialog

  ) {}



  openDialog(): void {

    let dialogRef = this.dialog.open(DialogboxComponent, {

      width: '350px',

      height: '350px'

    }); 

    

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');

    });

  }





  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {

      const id = params["id"];

      if (id) {

        this.recommendationService.get(id).subscribe(data => {

          this.cards = null;

          this.cards = data;

          console.log("ngOnInit: data from if block ", this.cards);

          console.log("1" + data);

          this.show=true;

        });

      } else {

        this.recommendationService.getAllGames().subscribe(data => {

          this.cards = null;

          this.cards = data;

          console.log("ngOnInit: data from else block ", this.cards);

          console.log("2" + data);

          this.show=false;

        });

      }

    });

    // this.categoryService.getAll().subscribe(data => {

    //   this.cards = data;

    //   console.log(data);



    // });

  }



  ngAfterViewInit() {

    const options: MasonryOptions = {

      itemSelector: ".card",

      columnWidth: ".card",

      gutter: 20,

      fitWidth: true

    };

    // this.masonryInstance = new this.masonry(this.grid.nativeElement, options);

  }



  layout() {

    this.masonryInstance.layout();

  }



  ngOnDestroy() {

    //this.masonryInstance.destroy();

    if (this.sub) {

      this.sub.unsubscribe();

    }

  }

  // public masonryOptions: MasonryOptions = {

  //   transitionDuration: "0.2s",

  //   gutter: 20,

  //   resize: true,

  //   initLayout: true,

  //   fitWidth: true

  // };



  showMoreImages() {

    this.limit += 15;

  }

  routeToQuiz(id,game_type,game_type_id,topic_id)

  {

    console.log(typeof game_type_id)

    if(game_type_id==1)

    {

    this.recommendationService.sendGameIdToSingleplayerEngine(id,game_type,game_type_id,topic_id).subscribe(data => {

     console.log("done")

    });

    

    this.router.navigate(['/quiz']);

    }

    if(game_type_id==2)

    {

    this.recommendationService.sendGameIdToMultiplayerEngine(id,game_type,game_type_id,topic_id).subscribe(data => {

     console.log("done")

    });

    

    this.router.navigate(['/quiz']);

    }

    if(game_type_id==3)

    {

    this.recommendationService.sendGameIdToAdaptiveEngine(id,game_type,game_type_id,topic_id).subscribe(data => {

     console.log("done")

    });

    

    this.router.navigate(['/quiz']);

    }

    //navigate to quizz game

  }
}