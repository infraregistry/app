import type { Observable } from 'rxjs';
import { type APIOperation } from '../helpers';
import { APIClient, type BatchResult } from './client';
import type { Location } from './locations';
import type { SearchParams } from './search';
import type { Tenant } from './tenants';

export interface CameraCreate {
  name: string;
  description: string;
  location: string;
  protocol: string;
  username: string;
  password: string;
  address: string;
  port: number;
  path: string;
}
export interface Camera {
  id: string;
  name: string;
  description: string;
  tenant: Tenant;
  location: Location;
  created: string;
  updated: string;
  status: CameraStatus;
  protocol: string;
  address: string;
  port: number;
  path: string;
  username: string;
  thumbnails: CameraThumbnails;
}

export enum CameraStatus {
  PENDING = 'pending',
  ONLINE = 'online',
  OFFLINE = 'offline',
  ERROR = 'error'
}

export interface CameraThumbnails {
  small: string;
  large: string;
}

export interface CameraInformation {
  name: string;
  description: string;
}

export interface CameraNetworking {
  address: string;
  port: number;
  path: string;
}

export interface CameraCredentials {
  username: string;
  password: string;
}

export interface CameraSearchParams extends SearchParams {
  locations?: string[];
}

export class CamerasClient extends APIClient {
  public search(params?: { [key: string]: string }): Observable<APIOperation<Camera[]>> {
    return this._get('/cameras', params);
  }

  public get(id: string): Observable<APIOperation<Camera>> {
    return this._get(`/cameras/${id}`);
  }

  public create(input: CameraCreate): Observable<APIOperation<Camera>> {
    return this._post('/cameras', input);
  }

  public update(id: string, input: Camera): Observable<APIOperation<BatchResult>> {
    return this._put(`/cameras/${id}`, input);
  }

  public updateInformation(id: string, input: CameraInformation): Observable<APIOperation<BatchResult>> {
    return this._put(`/cameras/${id}/information`, input);
  }

  public updateNetworking(id: string, input: CameraNetworking): Observable<APIOperation<BatchResult>> {
    return this._put(`/cameras/${id}/networking`, input);
  }

  public updateCredentials(id: string, input: CameraCredentials): Observable<APIOperation<BatchResult>> {
    return this._put(`/cameras/${id}/credentials`, input);
  }

  public delete(id: string): Observable<APIOperation<BatchResult>> {
    return this._delete(`/cameras/${id}`);
  }
}
