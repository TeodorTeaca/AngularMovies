import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { TOKEN_PATH, SESSION_PATH } from '../constants';

describe('LoginService', () => {
    let injector: TestBed;
    let service: LoginService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [LoginService],
        });

        injector = getTestBed();
        service = injector.get(LoginService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should create the login service', () => {
        expect(service).toBeTruthy();
    });

    it('getTokenRequest should return token', () => {

        const tokenResponse = {
            request_token: 'bbaf521939b41893d48ad97e9b8a950802745db7'
        };

        service.getTokenRequest().subscribe((res) => {
            expect(res).toEqual('bbaf521939b41893d48ad97e9b8a950802745db7');
        });

        const req = httpMock.expectOne(`${TOKEN_PATH}`);
        expect(req.request.method).toBe('GET');
        req.flush(tokenResponse);
    });

    it('getSessionRequest should return session', () => {

        const sessionResponse = {
            session_id: '546cea42ee56358610f826c83d660525bf6b561d'
        };

        const token = 'bbaf521939b41893d48ad97e9b8a950802745db7';

        service.getSessionRequest(token).subscribe((res) => {
            expect(res).toEqual('546cea42ee56358610f826c83d660525bf6b561d');
        });

        const req = httpMock.expectOne(`${SESSION_PATH}`);
        expect(req.request.method).toBe('POST');
        req.flush(sessionResponse);
    });

});