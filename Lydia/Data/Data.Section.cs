namespace Lydia.Data;

public static class PaintingKeys
{
    public static string GrowsButDoesNotAge = nameof(GrowsButDoesNotAge);
    public static string MotherTheFlourshingPalmOfOldage = nameof(MotherTheFlourshingPalmOfOldage);
}

public class Section
{
    public required int Order { get; set; }
}

public class Painting : Section
{
    public string Key { get; set; }
    public required string File { get; set; }
    public required bool Available { get; set; }
    public required string Name { get; set; }
    public required string Size { get; set; }
    public required string Descriptions { get; set; }
}

public static partial class Data
{
    public static Painting[] Paintings =
    [
        new()
        {
            Order = 8,
            Key = PaintingKeys.GrowsButDoesNotAge,
            Available = true,
            File = "8.webp",
            Name = "Grandit, mais ne viellit pas / Grows But Does Not Age",
            Size = "Original size: 18 x 24",
            Descriptions =
                """
                The painting was painted in 1971 on canvas using acrylic paint. If looked closely enough you can see areas that are highly emphasized, for definition.

                This monument was dedicated in memory of Quebec Labour Minister **Pierre Laporte** who was kidnapped and murdered by the FLQ (Front de libération du Québec), back in 1970.
                """
        },
        new()
        {
            Order = 9,
            Key = PaintingKeys.MotherTheFlourshingPalmOfOldage,
            File = "9.webp",
            Available = true,
            Name = "Mère la palme florissante de la vieillesse / Mother the flourishing palm of old age",
            Size = "Original size: 18 x 24",
            Descriptions =
                """
                Was painted in 1974 in Thiès. Painted on canvas, using acrylic paints.

                Painting representing that the mother is aging gracefully as the palm tree. Her strength, her hard work, in the midst of a hot sun and surrounded by palm trees that also nourish our planet.
                """
        },
        new()
        {
            Order = 10,
            File = "10.webp",
            Available = true,
            Name = "Tulipe / Tulip",
            Size = "Original size: 18 x 24",
            Descriptions = 
                """
                Painted in 1971. On canvas using acrylic paints.
                       
                When looking into a tulip you see the anther and the filament - the stems. That look just as graceful and delicate like a family of beautiful swans.
                """
        },
        new()
        {
            Order = 11,
            File = "11.webp",
            Available = true,
            Name = "Maman / Mother",
            Size = "Original size: 18 x 24",
            Descriptions = 
                """
                This painting was painted in December 1973. Painted on canvas using acrylic paints.
                    
                The inspiration came from a frosted window, where she saw an adult head, tears and a babies head, held close to the chest. Hens the name "Maman".
                """
        },
        new()
        {
            Order = 12,
            File = "12.webp",
            Available = true,
            Name = "Au bout de l'île / At the end of the island",
            Size = "Original size: 11 x 15",
            Descriptions = 
                """
                Carved and painted in 1954. This painting was carved into wood and painted with oil colours. Then varnished to preserve a soft glow for a partly reflective surface.

                Inspired by a trip to Îles-de-la-Madeleine at the Gulf of Saint Lawrence. Very pretty with its red cliffs and its many caves dug by the sea.
                """
        },
        new()
        {
            Order = 13,
            File = "13.webp",
            Available = true,
            Name = "Amitié / Friendship",
            Size = "Original size: 12.5 x 8.5",
            Descriptions = 
                """
                Painted on red wood in 1975. Carved and oil painted on red wood. Finished with a varnish to preserve a soft glow for a partly reflective surface.
                
                This is a symbol of friendship between two countries. The Canadian flag and the flag of Sénégal. A friendship never forgotten.
                """
        },
        new()
        {
            Order = 14,
            File = "14.webp",
            Available = true,
            Name = "Perce-neige / Snowdrops",
            Size = "Original size: 4.5 x 6",
            Descriptions = 
                """
                Pyrography in 1960. Used a wood burning tool and carving knifes. Painted with oil colours and finished with a varnish to preserve a soft glow for a partly reflective surface.

                One of first flowers to bloom in spring, they often symbolize new beginnings, hope, and overcome challenges. Having 5 girls was a challenge
                """
        },
        new()
        {
            Order = 15,
            File = "15.webp",
            Available = true,
            Name = "Jonquille / Daffodil",
            Size = "Original size: 5.5 x 7",
            Descriptions = 
                """
                Pyrography in 1960. Used a wood burning tool and carving knifes. Painted with oil colours and finished with a varnish to preserve a soft glow for a partly reflective surface.

                Inspired by natures beauty daffodils and pussy willows emerge in spring for Easter blessings.
                """
        },
        

    ];
}