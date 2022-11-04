using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<BooksDb>(opt => opt.UseInMemoryDatabase("BooksList"));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();
builder.Services.AddCors();
var app = builder.Build();

app.MapGet("/books", async (BooksDb db) =>
    await db.Books.ToListAsync());

app.MapGet("/books/{id}", async (int id, BooksDb db) =>
    await db.Books.FindAsync(id)
        is Book Book
            ? Results.Ok(Book)
            : Results.NotFound());

app.MapPost("/books", async (Book Book, BooksDb db) =>
{
    db.Books.Add(Book);
    await db.SaveChangesAsync();

    return Results.Created($"/books/{Book.Id}", Book);
});

app.UseHttpsRedirection();
app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000"));

app.Run();

class Book
{
    public int Id { get; set; }
    public string? BookName { get; set; }
    public string? AuthorName { get; set; }

    public string? Description { get; set; }

    public int? PageCount { get; set; }
}

class BooksDb : DbContext
{
    public BooksDb(DbContextOptions<BooksDb> options)
        : base(options) { }

    public DbSet<Book> Books => Set<Book>();
}