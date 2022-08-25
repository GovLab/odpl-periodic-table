# based on: https://github.com/18F/jekyll-get
require 'json'
# require 'hash-joiner'
require 'open-uri'
require 'byebug'

module GenerateStudiesData
  class Generator < Jekyll::Generator
    safe true
    priority :highest

    def generate(site)
      config = site.config['generate_studies_data']
      if !config
        return
      end
      if !config.kind_of?(Array)
        config = [config]
      end
      config.each do |d|
        begin
          collections_data = []
          site.collections["case_studies"].docs.each {|study| collections_data << study.data}
          # generate pack studies data
          pack_studies_data = format_pack_studies_data(collections_data)
          packstudies_json = JSON.dump(pack_studies_data)
          packstudies_path = site.config["generate_studies_data"]["packstudies_data_location"]
          File.open(packstudies_path, "w"){ |f| f <<  packstudies_json }
          # generate studies data
          studies_data = format_studies_data(collections_data)
          studies_json = JSON.dump(studies_data)
          studies_path = site.config["generate_studies_data"]["studies_data_location"]
          File.open(studies_path, "w"){ |f| f <<  studies_json }
        rescue
          next
        end
      end
    end

    def parameterize(str)
      # newstr = str.tr("ÀÁÂÃÄÅàáâãäåĀāĂăĄąÇçĆćĈĉĊċČčÐðĎďĐđÈÉÊËèéêëĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħÌÍÎÏìíîïĨĩĪīĬĭĮįİıĴĵĶķĸĹĺĻļĽľĿŀŁłÑñŃńŅņŇňŉŊŋÑñÒÓÔÕÖØòóôõöøŌōŎŏŐőŔŕŖŗŘřŚśŜŝŞşŠšſŢţŤťŦŧÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųŴŵÝýÿŶŷŸŹźŻżŽž","AAAAAAaaaaaaAaAaAaCcCcCcCcCcDdDdDdEEEEeeeeEeEeEeEeEeGgGgGgGgHhHhIIIIiiiiIiIiIiIiIiJjKkkLlLlLlLlLlNnNnNnNnnNnNnOOOOOOooooooOoOoOoRrRrRrSsSsSsSssTtTtTtUUUUuuuuUuUuUuUuUuUuWwYyyYyYZzZzZz").downcase.strip.gsub(' ', '-').gsub(/[^\w.-]/, '')
      newstr = str.downcase.strip.gsub(' ', '-').gsub(/[^[:word:].-]/, '').gsub(/\./, '')
      return newstr
    end

    def format_pack_studies_data(data)
      studies_data = {"region": "world"}
      regions = data.map {|x| x["region"]}.uniq
      regions.each do |reg|
        region = {"region": reg, "children":[]}
        if studies_data["children"].nil?
          studies_data["children"] = [region]
        else
          studies_data["children"].push({"region": reg, "children": []})
        end
      end
      data.each do |datum|
        region_children = studies_data["children"].select {|r| r[:region] == datum["region"]}[0][:children]
        region_children.push({
          "title": datum["title"] || "",
          "url": "https://govlab.github.io/odimpact-2/case-#{parameterize(datum['title'])}.html",
          "location": datum["region"],
          "impact": datum["impact_type"] || "",
          "sector": datum["sector"] || ""
          })
      end
      studies_data
    end

    def format_studies_data(data)
      studies_data = {name: "studies", children: []}
      data.each do |datum|
        studies_data[:children].push({
          "title": datum["title"] || "",
          "location": datum["region"] || "",
          "impact": datum["impact_type"] || "",
          "sector": datum["sector"] || ""
          })
      end
      studies_data
    end


  end
end