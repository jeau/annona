
module.exports = {

  get: jest.fn((url) => {
    if (url === 'paragraph.json') {
                return Promise.resolve({
                    data: {"resource":{"@type":"cnt:ContentAsText","format":"text/plain","chars":"Jim Watson and I have probably made a\nmost important discovery. We have built a model for\nthe structure of des-oxy-ribose-nucleic-acid (read it\ncarefully) called D.N.A. for short. You may remember\nthat the genes of the chromosomes - which carry the\nhereditary factors - are made up of protein and\nD.N.A."},"on":{"@id":"https://wellcomelibrary.org/iiif/b1948799x/canvas/c0#xywh=310,1250,1850,1180","@type":"sc:Canvas","within":{"@id":"https://wellcomelibrary.org/iiif/b1948799x/manifest","@type":"sc:Manifest"}}                      }
                });
            }
  if (url === 'https://wellcomelibrary.org/iiif/b1948799x/manifest') {
      return Promise.resolve({
        data: {"@context":"http://iiif.io/api/presentation/2/context.json","@id":"https://wellcomelibrary.org/iiif/b1948799x/manifest","@type":"sc:Manifest","label":"Letter from Francis Crick to Michael Crick","sequences":[{"canvases":[{"@id":"https://wellcomelibrary.org/iiif/b1948799x/canvas/c0","@type":"sc:Canvas","label":" - ","images":[{"@id":"https://wellcomelibrary.org/iiif/b1948799x/imageanno/ce30a1a7-a606-4b5e-b2ad-c13677d3e8f6","@type":"oa:Annotation","motivation":"sc:painting","resource":{"@id":"https://dlcs.io/iiif-img/wellcome/1/ce30a1a7-a606-4b5e-b2ad-c13677d3e8f6/full/!1024,1024/0/default.jpg","@type":"dctypes:Image","format":"image/jpeg","height":1024,"width":683,"service":{"@context":"http://iiif.io/api/image/2/context.json","@id":"https://dlcs.io/iiif-img/wellcome/1/ce30a1a7-a606-4b5e-b2ad-c13677d3e8f6","profile":"http://iiif.io/api/image/2/level1.json"}},"on":"https://wellcomelibrary.org/iiif/b1948799x/canvas/c0"}]}]}]        }
      })
  }
  if (url === 'mc00240.json') {
    return Promise.resolve({data:{"@context": "http://iiif.io/api/presentation/2/context.json", "@id": "http://localhost:4000/annotate/annotations/mc00240-001-ff0093-001-001-0010-list.json", "@type": "sc:AnnotationList", "resources": [{"on": [{"within": {"@id": "https://d.lib.ncsu.edu/collections/catalog/mc00240-001-ff0093-001-001_0010/manifest.json", "@type": "sc:Manifest"}, "@type": "oa:SpecificResource", "full": "https://d.lib.ncsu.edu/collections/canvas/mc00240-001-ff0093-001-001_0010", "selector": {"default": {"@type": "oa:FragmentSelector", "value": "xywh=740,567,3998,4586"}, "item": {"@type": "oa:SvgSelector", "value": "<svg xmlns='http://www.w3.org/2000/svg'><path xmlns=\"http://www.w3.org/2000/svg\" d=\"M740.00502,566.97616l1998.77039,0l0,0l1998.77039,0l0,2293.02384l0,2293.02384l-1998.77039,0l-1998.77039,0l0,-2293.02384z\" data-paper-data=\"{&quot;defaultStrokeValue&quot;:1,&quot;editStrokeValue&quot;:5,&quot;currentStrokeValue&quot;:5,&quot;rotation&quot;:0,&quot;annotation&quot;:null,&quot;editable&quot;:true}\" id=\"rectangle_dcc88375-b2ff-4b41-b061-6d9b5f6b81fc\" fill-opacity=\"0.00001\" fill=\"#00bfff\" fill-rule=\"nonzero\" stroke=\"#00bfff\" stroke-width=\"17.94228\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\"/></svg>"}, "@type": "oa:Choice"}}, {"within": {"@id": "https://d.lib.ncsu.edu/collections/catalog/mc00240-001-ff0093-001-001_0010/manifest.json", "@type": "sc:Manifest"}, "@type": "oa:SpecificResource", "full": "https://d.lib.ncsu.edu/collections/canvas/mc00240-001-ff0093-001-001_0010", "selector": {"default": {"@type": "oa:FragmentSelector", "value": "xywh=2735,589,14,14"}, "item": {"@type": "oa:SvgSelector", "value": "<svg xmlns='http://www.w3.org/2000/svg'><path xmlns=\"http://www.w3.org/2000/svg\" d=\"M2735.18695,588.5069l7.17691,0l0,0l7.17691,0l0,7.17691l0,7.17691l-7.17691,0l-7.17691,0l0,-7.17691z\" data-paper-data=\"{&quot;defaultStrokeValue&quot;:1,&quot;editStrokeValue&quot;:5,&quot;currentStrokeValue&quot;:5,&quot;rotation&quot;:0,&quot;annotation&quot;:null,&quot;editable&quot;:true}\" id=\"rectangle_00446e32-f965-4188-916c-b74faa69f71c\" fill-opacity=\"0.00001\" fill=\"#00bfff\" fill-rule=\"nonzero\" stroke=\"#00bfff\" stroke-width=\"17.94228\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\"/></svg>"}, "@type": "oa:Choice"}}], "motivation": ["oa:commenting"], "resource": [{"chars": "<p>Bank and Office Building for Wachovia Bank and Trust Co.</p>\n<p>Salisbury, NC</p>", "@type": "dctypes:Text", "format": "text/html"}], "@context": "http://iiif.io/api/presentation/2/context.json", "@id": "1bc33180-e9c1-4905-b1bb-f4751c1879fb", "@type": "oa:Annotation"}, {"on": [{"within": {"@id": "https://d.lib.ncsu.edu/collections/catalog/mc00240-001-ff0093-001-001_0010/manifest.json", "@type": "sc:Manifest"}, "@type": "oa:SpecificResource", "full": "https://d.lib.ncsu.edu/collections/canvas/mc00240-001-ff0093-001-001_0010", "selector": {"default": {"@type": "oa:FragmentSelector", "value": "xywh=4206,2376,1970,2379"}, "item": {"@type": "oa:SvgSelector", "value": "<svg xmlns='http://www.w3.org/2000/svg'><path xmlns=\"http://www.w3.org/2000/svg\" d=\"M4206.4542,2375.55834l985.03137,0l0,0l985.03137,0l0,1189.5734l0,1189.5734l-985.03137,0l-985.03137,0l0,-1189.5734z\" data-paper-data=\"{&quot;defaultStrokeValue&quot;:1,&quot;editStrokeValue&quot;:5,&quot;currentStrokeValue&quot;:1,&quot;rotation&quot;:0,&quot;deleteIcon&quot;:null,&quot;rotationIcon&quot;:null,&quot;group&quot;:null,&quot;editable&quot;:true,&quot;annotation&quot;:null}\" id=\"rectangle_97e17d4a-e919-467d-836b-17722e9fee6a\" fill-opacity=\"0\" fill=\"#00bfff\" fill-rule=\"nonzero\" stroke=\"#00bfff\" stroke-width=\"3.58846\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\"/></svg>"}, "@type": "oa:Choice"}}], "motivation": ["oa:tagging", "oa:commenting"], "resource": [{"chars": "balcony", "@type": "oa:Tag"}, {"chars": "railing", "@type": "oa:Tag"}, {"chars": "<p>DETAILS OF BALCONY RAILING</p>", "@type": "dctypes:Text", "format": "text/html"}], "@context": "http://iiif.io/api/presentation/2/context.json", "@id": "6796833f-be93-42d0-8fb1-832e8f39c6aa", "@type": "oa:Annotation"}, {"on": [{"within": {"@id": "https://d.lib.ncsu.edu/collections/catalog/mc00240-001-ff0093-001-001_0010/manifest.json", "@type": "sc:Manifest"}, "@type": "oa:SpecificResource", "full": "https://d.lib.ncsu.edu/collections/canvas/mc00240-001-ff0093-001-001_0010", "selector": {"default": {"@type": "oa:FragmentSelector", "value": "xywh=5943,222,2771,4521"}, "item": {"@type": "oa:SvgSelector", "value": "<svg xmlns='http://www.w3.org/2000/svg'><path xmlns=\"http://www.w3.org/2000/svg\" d=\"M5943.26725,222.48432l1385.53576,0l0,0l1385.53576,0l0,2260.72773l0,2260.72773l-1385.53576,0l-1385.53576,0l0,-2260.72773z\" data-paper-data=\"{&quot;defaultStrokeValue&quot;:1,&quot;editStrokeValue&quot;:5,&quot;currentStrokeValue&quot;:1,&quot;rotation&quot;:0,&quot;deleteIcon&quot;:null,&quot;rotationIcon&quot;:null,&quot;group&quot;:null,&quot;editable&quot;:true,&quot;annotation&quot;:null}\" id=\"rectangle_2a8e3963-b45d-4841-9879-421fb92fb141\" fill-opacity=\"0\" fill=\"#00bfff\" fill-rule=\"nonzero\" stroke=\"#00bfff\" stroke-width=\"3.58846\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\"/></svg>"}, "@type": "oa:Choice"}}], "motivation": ["oa:tagging", "oa:commenting"], "resource": [{"chars": "partition", "@type": "oa:Tag"}, {"chars": "<p>DETAILS OF PARTITION BETWEEN BANK AND DIRECTORS' ROOM</p>", "@type": "dctypes:Text", "format": "text/html"}], "@context": "http://iiif.io/api/presentation/2/context.json", "@id": "2f66f50f-8a7e-4596-8654-6b25c72179ea", "@type": "oa:Annotation"}]}
    })
  }
  if (url === 'https://d.lib.ncsu.edu/collections/catalog/mc00240-001-ff0093-001-001_0010/manifest.json'){
    return Promise.resolve({data:{"@context":"http://iiif.io/api/presentation/2/context.json","@id":"https://d.lib.ncsu.edu/collections/catalog/mc00240-001-ff0093-001-001_0010/manifest.json","@type":"sc:Manifest","label":"Cross section, interior details","related":{"@id":"https://d.lib.ncsu.edu/collections/catalog/mc00240-001-ff0093-001-001_0010","format":"text/html","label":"HTML page for the resource","dcterms:modified":"2018-11-20T20:02:09.861Z"},"logo":{"@id":"https://d.lib.ncsu.edu/collections/assets/ncsu-libraries-white-logo-placement-8e3a4e918262aa5993b0e0475989b02f.jpg"},"attribution":"Northup \u0026 O'Brien Architectural Records, 1917-1980 (MC00240), Special Collections Research Center at NCSU Libraries","license":["https://d.lib.ncsu.edu/collections/about#rights_and_use"],"metadata":[{"label":"title","value":"Cross section, interior details"},{"label":"Creator","value":"\u003cspan\u003e\u003ca href=\"https://d.lib.ncsu.edu/collections/catalog?f%5Bnames_facet%5D%5B%5D=O%27Brien%2C+Leet+Alexander%2C+1891-1963\"\u003eO\u0026#39;Brien, Leet Alexander, 1891-1963\u003c/a\u003e (Architect)\u003c/span\u003e"},{"label":"Created Date","value":"1924-06-201924-10-16"},{"label":"URL","value":"\u003cspan\u003e\u003ca href=\"https://d.lib.ncsu.edu/collections/catalog/mc00240-001-ff0093-001-001_0010\"\u003ehttps://d.lib.ncsu.edu/collections/catalog/mc00240-001-ff0093-001-001_0010\u003c/a\u003e\u003c/span\u003e"},{"label":"","value":"\u003cspan\u003e\u003ca href=\"https://d.lib.ncsu.edu/collections/catalog/mc00240-001-ff0093-001-001_0010?manifest=https%3A%2F%2Fd.lib.ncsu.edu%2Fcollections%2Fcatalog%2Fmc00240-001-ff0093-001-001_0010%2Fmanifest.json\" title=\"IIIF drag \u0026amp; drop\"\u003eIIIF drag \u0026amp; drop\u003c/a\u003e (\u003ca href=\"https://d.lib.ncsu.edu/collections/about-iiif\"\u003eAbout IIIF\u003c/a\u003e)\u003c/span\u003e"}],"thumbnail":{"@id":"https://iiif.lib.ncsu.edu/iiif/mc00240-001-ff0093-001-001_0010/full/150,/0/default.jpg","service":{"@context":"http://iiif.io/api/image/2/context.json","@id":"https://iiif.lib.ncsu.edu/iiif/mc00240-001-ff0093-001-001_0010","profile":"http://iiif.io/api/image/2/level2.json"}},"sequences":[{"canvases":[{"@type":"sc:Canvas","@id":"https://d.lib.ncsu.edu/collections/canvas/mc00240-001-ff0093-001-001_0010","width":8944,"height":5720,"label":"[1]","images":[{"@id":"https://d.lib.ncsu.edu/collections/canvas/mc00240-001-ff0093-001-001_0010/image","@type":"oa:Annotation","on":"https://d.lib.ncsu.edu/collections/canvas/mc00240-001-ff0093-001-001_0010","motivation":"sc:painting","resource":{"@id":"https://iiif.lib.ncsu.edu/iiif/mc00240-001-ff0093-001-001_0010/full/1170,/0/default.jpg","width":1170,"height":748,"service":{"profile":"http://iiif.io/api/image/2/level2.json","@context":"http://iiif.io/api/image/2/context.json","@id":"https://iiif.lib.ncsu.edu/iiif/mc00240-001-ff0093-001-001_0010"},"@type":"dctypes:Image"}}]}],"@type":"sc:Sequence","viewingHint":"non-paged"}],"seeAlso":[{"@id":"https://d.lib.ncsu.edu/collections/catalog/oai?identifier=ncsul%2Fmc00240-001-ff0093-001-001_0010\u0026metadataPrefix=oai_dc\u0026verb=GetRecord","format":"text/xml","label":"Dublin Core XML via OAI-PMH"},{"@id":"https://d.lib.ncsu.edu/collections/catalog/mc00240-001-ff0093-001-001_0010/schemaorg.json","format":"application/ld+json","profile":"https://schema.org","label":"Schema.org metadata as JSON-LD"}],"dcterms:modified":"2018-11-20T20:02:09.000Z","dcterms:created":"2010-01-20T11:29:42.000Z"}})
  }
  if (url === 'bees.json'){
    return Promise.resolve({data:{"type":"Annotation","@context":"http://www.w3.org/ns/anno.jsonld","label":"The Bees","body":{"value":"So many bees.","type":"TextualBody","purpose":"tagging","format":"text/plain"},"target":{"id":"https://d.lib.ncsu.edu/collections/canvas/segIns_023#xywh=318,499,2891,3339","type":"Canvas","dcterms:isPartOf":{"id":"https://d.lib.ncsu.edu/collections/catalog/segIns_023/manifest","type":"Manifest","label":"Insectes. [patterns]"}},"motivation":{"id":"http://www.w3.org/ns/oa#tagging","label":"tagging"},"generator":"/capture-models/generic/describing.json"}})
  }
  if (url === "https://d.lib.ncsu.edu/collections/catalog/segIns_023/manifest"){
    return Promise.resolve({data:{"@context":"http://iiif.io/api/presentation/2/context.json","@id":"https://d.lib.ncsu.edu/collections/catalog/segIns_023/manifest","@type":"sc:Manifest","label":"Insectes. [patterns]","description":"Four patterns inspired by insects.","related":{"@id":"https://d.lib.ncsu.edu/collections/catalog/segIns_023","format":"text/html","label":"HTML page for the resource","dcterms:modified":"2018-10-22T13:23:44.834Z"},"logo":{"@id":"https://d.lib.ncsu.edu/collections/assets/ncsu-libraries-white-logo-placement-8e3a4e918262aa5993b0e0475989b02f.jpg"},"attribution":"E. A. Séguy's Insectes (QL466 .S49 1920), Special Collections Research Center at NCSU Libraries","license":["https://d.lib.ncsu.edu/collections/about#rights_and_use"],"metadata":[{"label":"title","value":"Insectes. [patterns]"},{"label":"Creator","value":"\u003cspan\u003e\u003ca href=\"https://d.lib.ncsu.edu/collections/catalog?f%5Bnames_facet%5D%5B%5D=Se%CC%81guy%2C+E.+%28Euge%CC%80ne%29%2C+1890-1985\"\u003eSéguy, E. (Eugène), 1890-1985\u003c/a\u003e (Artist)\u003c/span\u003e"},{"label":"Created Date","value":"circa 19201929"},{"label":"URL","value":"\u003cspan\u003e\u003ca href=\"https://d.lib.ncsu.edu/collections/catalog/segIns_023\"\u003ehttps://d.lib.ncsu.edu/collections/catalog/segIns_023\u003c/a\u003e\u003c/span\u003e"},{"label":"","value":"\u003cspan\u003e\u003ca href=\"https://d.lib.ncsu.edu/collections/catalog/segIns_023?manifest=https%3A%2F%2Fd.lib.ncsu.edu%2Fcollections%2Fcatalog%2FsegIns_023%2Fmanifest.json\" title=\"IIIF drag \u0026amp; drop\"\u003eIIIF drag \u0026amp; drop\u003c/a\u003e (\u003ca href=\"https://d.lib.ncsu.edu/collections/about-iiif\"\u003eAbout IIIF\u003c/a\u003e)\u003c/span\u003e"}],"thumbnail":{"@id":"https://iiif.lib.ncsu.edu/iiif/segIns_023/full/150,/0/default.jpg","service":{"@context":"http://iiif.io/api/image/2/context.json","@id":"https://iiif.lib.ncsu.edu/iiif/segIns_023","profile":"http://iiif.io/api/image/2/level2.json"}},"sequences":[{"canvases":[{"@type":"sc:Canvas","@id":"https://d.lib.ncsu.edu/collections/canvas/segIns_023","width":6099,"height":8599,"label":"[1]","images":[{"@id":"https://d.lib.ncsu.edu/collections/canvas/segIns_023/image","@type":"oa:Annotation","on":"https://d.lib.ncsu.edu/collections/canvas/segIns_023","motivation":"sc:painting","resource":{"@id":"https://iiif.lib.ncsu.edu/iiif/segIns_023/full/1170,/0/default.jpg","width":1170,"height":1650,"service":{"profile":"http://iiif.io/api/image/2/level2.json","@context":"http://iiif.io/api/image/2/context.json","@id":"https://iiif.lib.ncsu.edu/iiif/segIns_023"},"@type":"dctypes:Image"}}]}],"@type":"sc:Sequence","viewingHint":"non-paged"}],"seeAlso":[{"@id":"https://d.lib.ncsu.edu/collections/catalog/oai?identifier=ncsul%2FsegIns_023\u0026metadataPrefix=oai_dc\u0026verb=GetRecord","format":"text/xml","label":"Dublin Core XML via OAI-PMH"},{"@id":"https://d.lib.ncsu.edu/collections/catalog/segIns_023/schemaorg.json","format":"application/ld+json","profile":"https://schema.org","label":"Schema.org metadata as JSON-LD"}],"dcterms:modified":"2018-10-22T13:23:44.000Z","dcterms:created":"2006-11-20T00:00:00.000Z"}
  })
}
if (url === 'page.json'){
  return Promise.resolve({data:{"@context":"http://www.w3.org/ns/anno.jsonld","id":"http://example.org/page1","type":"AnnotationPage","partOf":{"id":"annopagemanifest.json","label":"Page annotations","total":42023},"next":"http://example.org/page2","startIndex":0,"items":[{"id":"/annopage/p1/a1","type":"Annotation","motivation":"describing","body":{"type":"TextualBody","value":"<iiif-annotation annotationurl='https://dnoneill.github.io/annotate/annotations/0001-1.json'></iiif-annotation>","format":"text/html"},"target":{"id":"https://d.lib.ncsu.edu/collections/canvas/mc00084-001-te0159-000-001_0001#xywh=1800,2000,500,500","type":"Canvas"}}]}})
}
if (url === 'annopagemanifest.json'){
  return Promise.resolve({data:{"sequences":[{"@id":"https://d.lib.ncsu.edu/collections/canvas/mc00084-001-te0159-000-001_0001","canvases":[{"@id":"https://d.lib.ncsu.edu/collections/canvas/mc00084-001-te0159-000-001_0001","images":[{"@id":"https://d.lib.ncsu.edu/collections/canvas/mc00084-001-te0159-000-001_0001","resource":{"service":{"@id":"https://iiif.lib.ncsu.edu/iiif/mc00084-001-te0159-000-001_0001"}}}]}]}]}})
}
if (url === 'oa.json') {
  return Promise.resolve({data:{"@context":"http://iiif.io/api/presentation/2/context.json","@id":"oawithoutmanifest.json","@type":"sc:AnnotationList","resources":[{"@type":"oa:Annotation","motivation":"sc:painting","resource":{"@type":"cnt:ContentAsText","format":"text/plain","chars":"Annotation 1"},"on":"https://iiif.lib.ncsu.edu/iiif/segIns_023/info.json#xywh=6270,3903,2250,2250"},{"@type":"oa:Annotation","motivation":"sc:painting","resource":{"@type":"cnt:ContentAsText","format":"text/plain","chars":"Annotation 2"},"on":"https://iiif.lib.ncsu.edu/iiif/segIns_023/318,499,2891,3339/1200,/0/default.jpg#xywh=12288,16567,2250,2250"}]}})
}

if (url === 'bees2.json'){
  return Promise.reject()
  }
})
}
