import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';
import { CreateList } from './add-list.service';
import { Interceptor } from './interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ADD_LIST_PATH } from '../constants';

describe(`Interceptor`, () => {
    let service: CreateList;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                CreateList,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: Interceptor,
                    multi: true,
                },
            ],
        });

        service = TestBed.get(CreateList);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should create instance', () => {
        expect(service).toBeTruthy();
    });

    // fit('create list request', () => {
    //     service.createListRequest('name', 'description').subscribe(response => {
    //         expect(response).toBeTruthy();
    //     });
    // const httpRequest = httpMock.expectOne(`{REQUIRES_AUTH}list`);

    // expect(httpRequest.request.headers.has('{REQUIRES_AUTH}')).toEqual(true);

    // expect(httpRequest.request.headers.get('{REQUIRES_AUTH}')).toBe(
    //     'token YOUR-TOKEN-HERE',
    // );
    // });


});