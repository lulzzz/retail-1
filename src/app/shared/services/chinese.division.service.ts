import { Injectable, OnInit } from "@angular/core";

declare var require: any;

export interface Province {
    Name: string;
    Code: number;
}

export interface City {
    Name: string;
    Code: number;

    Province: Province;
}

export interface District {
    Name: string;
    Code: number;

    City: City;
}

declare var gb2260: any;

@Injectable()
export class ChineseDivisionService {

    protected readonly _gb: any;

    constructor() {
        gb2260.register('201607', require('assets/chinese/divisions/201607.json'));
        {
            this._gb = new gb2260.GB2260('201607');
        }
    }

    public GetProvince(code: number): Province {
        var item = this._gb.get(code);
        if (item) {
            return { Code: +item.code, Name: item.name };
        }

        return null;
    }

    public GetCity(code: number): City {
        var item = this._gb.get(code);
        if (item) {
            return { Code: +item.code, Name: item.name, Province: this.GetProvince(item.province.code) };
        }

        return null;
    }

    public GetDistrict(code: number): District {
        var item = this._gb.get(code);
        if (item) {
            return { Code: +item.code, Name: item.name, City: this.GetCity(item.prefecture.code) };
        }

        return null;
    }

    public ListProvince(): Province[] {
        var list_result: Province[] = [];

        var list = this._gb.provinces();
        for (let i = 0; i < list.length; i++) {
            list_result.push({ Code: +list[i].code, Name: list[i].name });
        }

        return list_result;
    }

    public ListCity(code: number): City[] {
        var list_result: City[] = [];

        var province = this.GetProvince(code);
        if (province) {
            var list = this._gb.prefectures(code);
            for (let i = 0; i < list.length; i++) {
                list_result.push({ Code: +list[i].code, Name: list[i].name, Province: province });
            }
        }

        return list_result;
    }

    public ListDistrict(code: number): District[] {
        var list_result: District[] = [];

        var city = this.GetCity(code);
        if (city) {
            var list = this._gb.counties(code);
            for (let i = 0; i < list.length; i++) {
                list_result.push({ Code: +list[i].code, Name: list[i].name, City: city });
            }
        }

        return list_result;
    }
}
