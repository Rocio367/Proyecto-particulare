export class Menu {
  name:string;
  items:MenuItem[] = [];
}

export class MenuItem {
  name:string;
  link:string;
  icon:string;
  method:string;
  items:MenuItem[] = [];

  constructor(name:string, link:string, icon:string, method:string = null) {
    this.name = name;
    this.link = link;
    this.icon = icon;
    this.method = method;
  }
}
