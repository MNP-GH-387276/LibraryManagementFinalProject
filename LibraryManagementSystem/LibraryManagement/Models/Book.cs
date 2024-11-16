namespace LibraryManagement.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
            public string Description { get; set; }
        public int Publicationyear { get; set; }
        public int AuthorId { get; set; }
        public Author Author { get; set; }
        public int CetegoryId { get; set; }
        public Category Cetegory { get; set; }

    }
}
