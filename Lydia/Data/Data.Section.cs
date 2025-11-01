namespace Lydia.Data;

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
            Key = "grows-but-does-not-age",
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
            Key = "mother-the-flourishing-palm-of-old-age",
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
            Key = "tulip",
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
            Key = "mother",
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
            Key = "at-the-end-of-the-island",
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
            Key = "friendship",
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
            Key = "snowdrops",
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
            Key = "daffodil",
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
        new()
        {
            Order = 16,
            Key = "the-sunflowers",
            File = "16.webp",
            Available = true,
            Name = "Les tournesols / The sunflowers",
            Size = "Original size: 11\"",
            Descriptions =
                """
                Carved on wood in 1955. Frame of a plate. Painted with oil colours and lightly varnished.

                She always like sunflowers and would plant them in her garden.
                """
        },
        new()
        {
            Order = 17,
            Key = "decorative-plate",
            File = "17.webp",
            Available = true,
            Name = "Assiette décorative / Decorative plate",
            Size = "Original size: 10\"",
            Descriptions =
                """
                Carved on wood in 1955. Frame of a plate is carved using carving knives followed by pyrography, delicately burning wood. Painted with oil colours and lightly varnished.
                """
        },
        new()
        {
            Order = 18,
            Key = "lithuanien-plate",
            File = "18.webp",
            Available = true,
            Name = "Assiette Lithuanienne / Lithuanien Plate",
            Size = "Original size: 12\"",
            Descriptions =
                """
                Carved on wood in 1955. Frame of a plate is sanded down to give a wavy surface, followed by pyrography, delicately burning wood. Painted with oil colours and lightly varnished.

                The colours she used are symbolic to the Lithuanian flag, yellow, green, and red.
                """
        },
        new()
        {
            Order = 19,
            Key = "three-pansies",
            File = "19.webp",
            Available = true,
            Name = "Trois pensée / Three pansies",
            Size = "Original size: 11\"",
            Descriptions =
                """
                Carved on wood in 1955. Frame of a plate is sanded down to give a wavy surface, followed by carving the details. Painted with oil colours and lightly varnished.

                She liked her flowers and would grow them in her garden. She was very thoughtful.
                """
        },
        new()
        {
            Order = 20,
            Key = "night",
            File = "20.webp",
            Available = true,
            Name = "Nocturne / Night",
            Size = "Original size: 16 x 20",
            Descriptions =
                """
                Copper year 1967. Push-back method used on copper. The back of the painting is filled with wax. Which was heated then poured onto the copper. Preventing the painting to cave in. Varnished to preserve a shine.

                Three laddies sitting on a rock, basking in the moonlight ocean to cool from the hot summer nights.
                """
        },
        new()
        {
            Order = 21,
            Key = "young-girl-with-braids",
            File = "21.webp",
            Available = true,
            Name = "Jeune fille aux tresses / Young girl with braids",
            Size = "Original size: 11 x 18",
            Descriptions =
                """
                Portrait made back in 1964. Push-back method used on copper. The back of the painting is filled with wax. Which was heated then poured onto the copper. Preventing the painting to cave in.

                I am pretty sure it was a self portrait when she was younger as she did wear braids. Then again so did her girls.
                """
        },
        new()
        {
            Order = 22,
            Key = "koutchoum",
            File = "22.webp",
            Available = true,
            Name = "Koutchoum",
            Size = "Original size: 15 x 19",
            Descriptions =
                """
                Painting was done in 1964.

                Push-back method used on copper. The back of the painting is filled with wax. Which was heated then poured onto the copper. Preventing the painting to cave in. Lots of detail was put in.

                Her beloved German shepherd when he passed away, she made a portrait of him, to never be forgotten.
                """
        },
        new()
        {
            Order = 23,
            Key = "annunciation",
            File = "23.webp",
            Available = true,
            Name = "Annonciation / Annunciation",
            Size = "Original size: 15 x 19",
            Descriptions =
                """
                Painting was done in 1967.

                Push-back method used on copper. The back of the painting is filled with wax. Which was heated then poured onto the copper. Preventing the painting to cave in.

                The announcement of the Incarnation by the angel Gabriel to virgin Mary.
                """
        },
        new()
        {
            Order = 24,
            Key = "andersens-tale",
            File = "24.webp",
            Available = true,
            Name = "Conte d'andersen / Andersen's Tale",
            Size = "Original size: 18 x 18",
            Descriptions =
                """
                Painting was done in 1961.

                Push-back method used on tin. The back is filed with wax. Which was heated then poured onto the tin. Preventing the painting to cave in.

                It's a story of a princess who rescues her 11 brothers from a spell cast by an evil queen. In this case she shows 5 swans representing her 5 girls.
                """
        },
        new()
        {
            Order = 25,
            Key = "dancers",
            File = "25.webp",
            Available = true,
            Name = "Danseuses / Dancers",
            Size = "Original size: 11 x 15",
            Descriptions =
                """
                Painting was done in 1961.

                Push-back method used on copper. The back of the painting is filled with wax. Which was heated then poured onto the copper. Preventing the painting to cave in.

                Three dancing gypsies. Gypsy dance is, dynamic and entertaining. Russian folk dance dated back around the 19th century.
                """
        },
        new()
        {
            Order = 26,
            Key = "fountain-of-youth",
            File = "26.webp",
            Available = true,
            Name = "Fontaine de jouvence / Fountain of Youth",
            Size = "Original size: 11 x 15",
            Descriptions =
                """
                Year 1961. Push-back method used on copper. The back is filled with wax. Which was heated then poured onto the copper. Preventing the painting to cave in. Dark areas are blackened with black oxide, then varnished to preserve a shine on some areas.

                <a href="https://en.wikipedia.org/wiki/Fountain_of_Youth">Mythical fountain</a> allegedly restores the youth to anyone who baths in it.
                """
        },
        new()
        {
            Order = 27,
            Key = "quadriga",
            File = "27.webp",
            Available = true,
            Name = "Quadrigue / Quadriga",
            Size = "Original size: 11 x 11",
            Descriptions =
                """
                Year 1961. Push-back method used on copper. The back is filled with wax. Which was heated then poured onto the copper. Preventing the painting to cave in. Dark areas are blackened with black oxide, then varnished to preserve a shine on some areas.

                Historically famous for the Brandenburg gate quadriga, 4 majestic horses.
                """
        },
        new()
        {
            Order = 28,
            Key = "maple-leaves",
            File = "28.webp",
            Available = true,
            Name = "Feuilles d'Erable / Maple leaves",
            Size = "Original size: 11 x 12",
            Descriptions =
                """
                Year 1960.  Push-back method used on copper. The back of the painting is filled with wax. Which was heated then poured onto the copper. Preventing the painting to cave in.  Dark areas are blackened with black oxide, then varnished to preserve a shine on surfaced areas.

                Symbolic to the beauty of maple leaves.
                """
        },
        new()
        {
            Order = 29,
            Key = "princess-javakha",
            File = "29.webp",
            Available = true,
            Name = "Princesse Javakha / Princess Javakha",
            Size = "Original size: 11 x 14",
            Descriptions =
                """
                Year 1960.  Push-back method used on copper. The back is filled with wax. Which was heated then poured onto the copper. Preventing the painting to cave in.  Dark areas are blackened with black oxide, then varnished to preserve a shine on surfaced areas.

                Folk tale. Princess Javakha escaping her rivals on a horse.
                """
        },
        new()
        {
            Order = 30,
            Key = "loreley",
            File = "30.webp",
            Available = true,
            Name = "Loreley / Loreley",
            Size = "Original size: 18 x 15",
            Descriptions =
                """
                Year 1963.  Push-back method used on copper. The back is filled with wax. Which was heated then poured onto the copper. Preventing the painting to cave in.  Dark areas are blackened with black oxide, then varnished to preserve a shine on surfaced areas.

                The beautiful <a href="https://visitworldheritage.com/en/eu/the-loreley-rock/7b9a0bb3-18b3-44da-907e-e9861d3f831b">siren</a>/mermaid whose songs enchanted passing sailors.
                """
        },
        new()
        {
            Order = 31,
            Key = "hummingbirds",
            File = "31.webp",
            Available = true,
            Name = "Colibris / Hummingbirds",
            Size = "Original size: 15 x 19",
            Descriptions =
                """
                Year 1961. Push-back method used on copper. The back is filled with wax. Which was heated then poured onto the copper. Preventing the painting to cave in.  Dark areas are blackened with black oxide, then varnished to preserve a shine on surfaced areas.

                Inspiring sign of hope & good luck. The spirit of a loved one is nearby.
                """
        },
        new()
        {
            Order = 32,
            Key = "our-lady-of-perpetual-help",
            File = "32.webp",
            Available = true,
            Name = "Notre-Dame du Perpétuel Secours / Our Lady of Perpetual Help",
            Size = "Original size: 21 x 27",
            Descriptions =
                """
                Copper year 1962 - Tin 1971. Push-back method used on both. The back is filled with wax. Which was heated then poured onto the copper and tin. Preventing the painting to cave in.  Dark areas are blackened with black oxide, then varnished to preserve a shine on surfaced areas.

                <a href="https://en.wikipedia.org/wiki/Our_Lady_of_Perpetual_Help">Mother of God holding the Divine Child</a>
                """
        }
    ];
}