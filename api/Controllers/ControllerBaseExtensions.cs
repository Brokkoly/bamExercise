using Microsoft.AspNetCore.Mvc;

namespace StargateAPI.Controllers
{
    public static class ControllerBaseExtensions
    {

        public static IActionResult GetResponse(this ControllerBase controllerBase, BaseResponse response)
        {
            var httpResponse = new ObjectResult(response);
            httpResponse.StatusCode = response.ResponseCode;
            return httpResponse;
        }

        public static IActionResult GetResponse(this ControllerBase controllerBase, Exception ex)
        {
            var newResponse = BaseResponse.MakeResponseFromException(ex);

            var httpResponse = new ObjectResult(newResponse);
            httpResponse.StatusCode = newResponse.ResponseCode;
            return httpResponse;

        }
    }
}