import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AbstractComponent } from "../abstract.component";
import { APIConfig } from "../../common/constants/api.constants";
import { TranslateService } from "@ngx-translate/core";
import { NavService } from "./nav.service";
import { Principal } from "../../common/service/principal.service";
import { AppObject } from "../../common/utils/app-object.utils";
import { MenuItem } from "primeng/api";
import { NotificationService } from "src/app/common/service/notification.service";
@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ['./nav.component.scss']
})
export class NavComponent extends AbstractComponent implements OnInit {
  visible = false;
  profileVisible = false;
  leftItems: MenuItem[] = [
    {
      label: "menu.admin#",
      visible: this.isAuthorize([
        APIConfig.USERGET,
        APIConfig.GROUPGET,
        APIConfig.SERVICEGETLIST,
        APIConfig.DEVICE_GET_ALL,
        APIConfig.BRANCH_GET_ALL
      ]),
      items: <MenuItem[]>[
        {
          label: "menu.admin.organization#",
          visible: this.isAuthorize([
            APIConfig.USERLIST,
            APIConfig.GROUPGETALL,
            APIConfig.BRANCH_GET_ALL,
            APIConfig.SERVICEGETLIST
          ]),
          items: <MenuItem[]>[
            {
              label: "menu.admin.organization.userManager",
              routerLink: ["/main", "user"],
              icon: "fa-users text-info",
              visible: this.isAuthorize([APIConfig.USERLIST])
            }
          ]
        },
        {
          label: "menu.admin.system#",
          visible: false,
          items: <MenuItem[]>[
            {
              label: "menu.admin.system.configuration",
              routerLink: ["/main", "config"],
              icon: "fa-hdd text-info",
              visible: false
            }
          ]
        },
        {
          label: "menu.report#",
          visible: this.isAuthorize([APIConfig.TRANSACTIONGETLIST]),
          items: <MenuItem[]>[
            {
              label: "menu.admin.report.his_trans",
              routerLink: ["/main", "transaction"],
              icon: "fas fa-history text-info",
              visible: this.isAuthorize([APIConfig.TRANSACTIONGETLIST])
            },
          ]
        }
      ]
    },
  ];

  rightItems: MenuItem[] = [
    {
      label: "profile_information", icon: "pi pi-info-circle",
      command: () => {
        this.profileVisible = true;
      }
    },
    {
      label: "signout",
      icon: "pi pi-sign-out",
      command: () => {
        this.navService.logout();
        this.router.navigateByUrl('/');
      }
    }
  ];
  constructor(
    protected router: Router,
    private navService: NavService,
    private translate: TranslateService,
    principal: Principal,
    public notification: NotificationService
  ) {
    super(principal);
  }

  ngOnInit() {
    for (const menu1 of this.leftItems) {
      this.translate.get(menu1.label || "").subscribe(value => {
        menu1.label = value;
      });
      if (!AppObject.isUndefined(menu1.items)) {
        for (const menu2 of <MenuItem[]>menu1.items) {
          if (!AppObject.isUndefined(menu2.routerLink)) {
            menu2.command = () => {
              this.toggleVisible();
            };
          }

          if (!AppObject.isUndefined(menu2.label)) {
            this.translate.get(menu2.label).subscribe(value => {
              menu2.label = value;
            });
          }
          if (!AppObject.isUndefined(menu2.items)) {
            for (const menu3 of <MenuItem[]>menu2.items) {
              if (!AppObject.isUndefined(menu3.routerLink)) {
                menu3.command = () => {
                  this.toggleVisible();
                };
              }
              if (!AppObject.isUndefined(menu3.label)) {
                this.translate.get(menu3.label).subscribe(value => {
                  menu3.label = value;
                });
              }
            }
          }
        }
      }
    }

    for (const menu1 of this.rightItems) {
      this.translate.get(menu1.label || "").subscribe(value => {
        menu1.label = value;
      });
      if (!AppObject.isUndefined(menu1.items)) {
        for (const menu2 of <MenuItem[]>menu1.items) {
          if (!AppObject.isUndefined(menu2.label)) {
            this.translate.get(menu2.label).subscribe(value => {
              menu2.label = value;
            });
          }
          if (!AppObject.isUndefined(menu2.items)) {
            for (const menu3 of <MenuItem[]>menu2.items) {
              if (!AppObject.isUndefined(menu3.label)) {
                this.translate.get(menu3.label).subscribe(value => {
                  menu3.label = value;
                });
              }
            }
          }
        }
      }
    }
  }

  toggleVisible() {
    this.visible = !this.visible;
  }

  toggleProfileVisible() {
    console.log("---",this.profileVisible);
    this.profileVisible = !this.profileVisible;
  }
}
