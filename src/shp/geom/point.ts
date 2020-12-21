import { Coordinate } from "./coordinate";
import { ShapeType, ShpGeometryBase } from "./geometry";
import { GeoJsonGeom } from "./geoJson";

export type ShpPointType = ShapeType.Point | ShapeType.PointZ | ShapeType.PointM;

export class ShpPoint extends ShpGeometryBase {
  private _point: Coordinate = null;

  public get x() {
    return this._point.x;
  }

  public get y(): number {
    return this._point.y;
  }

  public get z(): number {
    return this._point.z;
  }

  public get m(): number {
    return this._point.m;
  }

  constructor(type: ShpPointType, coord: Coordinate) {
    super(type);
    this._point = coord;
  }

  public toGeoJson(): GeoJsonGeom {
    return {
      type: "Point",
      coordinates: this._point.toGeoJson(),
    };
  }
}