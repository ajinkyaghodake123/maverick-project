import { Component, ViewChild } from "@angular/core";
import { NguCarousel, NguCarouselStore, NguCarouselConfig } from "../carousel";
import { FormControl } from "@angular/forms";
import { RecommendationService } from "../recommendation.service";
import { MatDialog } from '@angular/material';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  moduleId: module.id,
  selector: "app-carousel-card",
  templateUrl: "./carousel-card.component.html",
  styleUrls: ["./carousel-card.component.scss"]
})
export class CarouselCardComponent {
  showRecommendations = true;
  recommendations = "Recommendations";
  storeCarouselData: NguCarouselStore;
  rsts: any;
  stateCtrl: FormControl;
  categories: any[] = [];
  //categories: { name: string; img: string }[];
  imgags: string[];
  public carouselBannerItems: Array<any> = [];
  public carouselBanner: NguCarouselConfig;

  public carouselTileItems: Array<any> = [];
  public carouselTile: NguCarouselConfig;

  public carouselTileOneItems: Array<any> = [];
  public carouselTileOne: NguCarouselConfig;

  public carouselTileTwoItems: Array<any> = [];
  public carouselTileTwo: NguCarouselConfig;
  indexr = 0;
  userId;
  @ViewChild("mybanners") mybanners: NguCarousel;

  constructor(private recommendationService: RecommendationService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.userId=this.recommendationService.getUserId();
    console.log("data in userid ="+this.userId)
   }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogboxComponent, {
      width: '350px',
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  public cc: string = 'warn';
  public changeColor(id): void {
    if (this.categories[0].id === id) {
      if (this.cc === 'warn') {
        this.cc = 'primary';
      }
      else {
        this.cc = 'warn';
      }
    } else {
      alert("Id not correct")
    }
  };


  onClick(name,id,userId) {
    this.showRecommendations = false;
    this.recommendations = name;
    this.userId=this.recommendationService.getUserId();
    console.log("in ca :"+this.userId)
    this.recommendationService.setUserId(this.userId);
    this.recommendationService.sendCar(id);
    console.log("c data--> "+id+" "+this.userId);
   this.router.navigate(['/game-by-categoryId', id,this.userId])
  }
  ngOnInit() {
    this.imgags = [
      "assets/bg.jpg",
      "assets/holi.jpg"
    ];

    this.carouselTileOne = {
      grid: { xs: 2, sm: 3, md: 4, lg: 4, all: 0 },
      speed: 600,
      point: {
        visible: true,
        pointStyles: `
          .ngucarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            box-sizing: border-box;
          }
          .ngucarouselPoint li {
            display: inline-block;
            border-radius: 50%;
            background: #6b6b6b;
            padding: 5px;
            margin: 0 3px;
            transition: .4s;
          }
          .ngucarouselPoint li.active {
              border: 2px solid rgba(0, 0, 0, 0.55);
              transform: scale(1.2);
              background: transparent;
            }
        `
      },
      load: 2,
      loop: true,
      touch: true,
      easing: "ease",
      animation: "lazy"
    };
    this.carouselTileOneLoad();
    this.carouselTileTwoLoad();

    this.recommendationService.getAll().subscribe(data => {
      this.categories = data;
    });
  }
  onMoveData(data) {
  }

  getCarouselData(ent) {
    this.storeCarouselData = ent;
  }

  filterStates(name: string) {
    return this.categories.filter(
      category => category.name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
  }

  public carouselTileOneLoad() {
    const len = this.carouselTileOneItems.length;
    if (len <= 30) {
      for (let i = len; i < len + 15; i++) {
        this.carouselTileOneItems.push(
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        );
      }
    }
  }

  public carouselTileTwoLoad() {
    const len = this.carouselTileTwoItems.length;
    if (len <= 30) {
      for (let i = len; i < len + 15; i++) {
        this.carouselTileTwoItems.push(
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        );
      }
    }
  }
}
