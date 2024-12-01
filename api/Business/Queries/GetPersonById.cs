using Dapper;
using MediatR;
using StargateAPI.Business.Data;
using StargateAPI.Business.Dtos;
using StargateAPI.Controllers;

namespace StargateAPI.Business.Queries
{
    public class GetPersonById : IRequest<GetPersonByIdResult>
    {
        public required string Id { get; set; } = string.Empty;
    }

    public class GetPersonByIdHandler : IRequestHandler<GetPersonById, GetPersonByIdResult>
    {
        private readonly StargateContext _context;
        public GetPersonByIdHandler(StargateContext context)
        {
            _context = context;
        }

        public async Task<GetPersonByIdResult> Handle(GetPersonById request, CancellationToken cancellationToken)
        {
            var result = new GetPersonByIdResult();

            var query = $"SELECT a.Id as PersonId, a.Name, b.CurrentRank, b.CurrentDutyTitle, b.CareerStartDate, b.CareerEndDate FROM [Person] a LEFT JOIN [AstronautDetail] b on b.PersonId = a.Id WHERE '{request.Id}' = a.Id";

            var person = await _context.Connection.QueryAsync<PersonAstronaut>(query);

            var personResult = person.FirstOrDefault();

            result.Person = person.FirstOrDefault();



            return result;
        }
    }

    public class GetPersonByIdResult : BaseResponse
    {
        public PersonAstronaut? Person { get; set; }
    }
}
