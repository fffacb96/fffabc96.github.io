namespace Lydia.Data;

public static class Keys
{
    public static string P_GrowsButDOesNotAge = nameof(P_GrowsButDOesNotAge);
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
            Key = Keys.P_GrowsButDOesNotAge,
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
            File = "9.webp",
            Available = true,
            Name = "Mère la palme florissante de la vieillesse / Mother the flourishing palm of old age",
            Size = "Original size: 18 x 24",
            Descriptions =
                """
                Was painted in 1974 in Thiès. Painted on canvas, using acrylic paints.

                Painting representing that the mother is aging gracefully as the palm tree. Her strength, her hard work, in the midst of a hot sun and surrounded by palm trees that also nourish our planet.
                """
        }
    ];
}