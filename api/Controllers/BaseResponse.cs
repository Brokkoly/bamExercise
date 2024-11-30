using System.Net;

namespace StargateAPI.Controllers
{
    public class BaseResponse
    {
        public bool Success { get; set; } = true;
        public string Message { get; set; } = "Successful";
        public int ResponseCode { get; set; } = (int)HttpStatusCode.OK;



        public static BaseResponse MakeResponseFromException(Exception ex)
        {
            var response = new BaseResponse()
            {
                Success = false,
                Message = "An Error Ocurred",
                ResponseCode = (int)HttpStatusCode.InternalServerError
            };

            if (ex is BadHttpRequestException)
            {
                response.Message = ex.Message;
                response.ResponseCode = (int)HttpStatusCode.BadRequest;
            }
            return response;
        }
    }

}