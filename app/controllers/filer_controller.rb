require 'mime/types'

class FilerController < ApplicationController

  @mime_types = MIME::Types.to_a

  def download
    path = "/" + params["path"]
    path += "." + params["format"] if params["format"]
    if File.exists?(path)
      send_file path
    else
      render :text => "not found: #{path}"
    end
  end

  def view
    path = "/" + params["path"]
    path += "." + params["format"] if params["format"]
    if File.exists?(path)
      begin
        send_file(path,
                  :type => @mime_types.select{|type| type.extensions.index(params["format"])}.first.content_type,
                  :disposition => 'inline')
      rescue
        send_file path
      end
    else
      render :text => "not found: #{path}"
    end
  end

  def preview
    @path = "/" + params["path"]
    @path += "." + params["format"] if params["format"]
  end

  def webfiler
    @path = ENV["HOME"]
    @entries = Dir.entries(@path).map{ |entry|
      if File.directory?(File.join(@path, entry))
        entry + "/" 
      else
        entry
      end
    }
  end

  def filelist
    @path = "/" + params["path"]
    @path = "/" + params["path"] + "." + params["format"] if params["format"]
    @path = ENV["HOME"] unless @path =~ /^#{ENV["HOME"]}/
    @entries = Dir.entries(@path).map{ |entry|
      if File.directory?(File.join(@path, entry))
        entry + "/" 
      else
        entry
      end
    }.reject{ |entry| entry =~ /^\.+/ }
  end

  def filelist_all
    @path = "/" + params["path"]
    @path = "/" + params["path"] + "." + params["format"] if params["format"]
    @path = ENV["HOME"] unless @path =~ /^#{ENV["HOME"]}/
    @entries = Dir.entries(@path).map{ |entry|
      if File.directory?(File.join(@path, entry))
        entry + "/" 
      else
        entry
      end
    }.reject{ |entry| entry =~ /^\.+\/$/ }
  end

end
